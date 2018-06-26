angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'IntroCtrl',
            templateUrl: 'views/intro.html'
        })

        .when('/comp1', {
            controller: 'Comp1Ctrl',
            templateUrl: 'views/comp1.html'
        })

        .when('/comp2', {
            controller: 'Comp2Ctrl',
            templateUrl: 'views/comp2.html'
        })

        .otherwise({redirectTo: '/'});
    });
