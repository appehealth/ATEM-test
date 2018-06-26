angular.module('App.services', [])
    .factory('cordovaReady', [function () {
        return function (fn) {
            var queue = [],
                impl = function () {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
                return impl.apply(this, arguments);
            };
        };
    }])
    .service('storeEvents', function () {
        var templates = [];
        var startTime;

       function logEvent (logText, component, item) {
                var timestamp = Date.now() - startTime;
                templates.push(timestamp + ': Component ' + component +', Item ' + item + ': ' + logText);
                console.log(templates);

                }

      function logStart(){
        startTime = Date.now();
        logEvent('Start');
      }

      return {
        logStart: logStart,
        templates:templates,
        logEvent: logEvent

      };


     })
    ;
