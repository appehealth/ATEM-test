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

       function logEvent (newObj) {
                var timestamp = Date.now();
                templates.push(timestamp + ': ' + newObj);
                console.log(templates);

                }

      return {

        templates:templates,
        logEvent: logEvent

      };


     })
    ;
