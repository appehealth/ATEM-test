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


    .factory('loadQuestion', function ($q, $http) {
        return {
            get: function (komponente) {
                var deferred = $q.defer();
                $http.get('json/comp' + komponente + '.json').then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error)
                });
                return deferred.promise;
            }
        };
    });
    ;
