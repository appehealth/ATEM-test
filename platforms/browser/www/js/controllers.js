angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', '$http', function ($scope, $http) {
             $scope.questions = [];
              $http
                .get("json/comp1.json")
                .then(function(response){
                  $scope.questions = response.data.questions;
                });

        }])

    ;

;