angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', '$http', function ($scope, $http) {
             var allQuestions = [];
             var iter = 0;
             $scope.questions = [];
              $http
                .get("json/comp1.json")
                .then(function(response){
                  $scope.questions = response.data.questions;
                  allQuestions = response.data.questions;
                  $scope.currentQuestion = allQuestions[iter];
                });

              $scope.naechsteFrage = function(){
                if(iter < 1){
                    iter = iter + 1;
                    $scope.currentQuestion = allQuestions[iter];
                }
                else alert("Letzte Frage erreicht");
              };

        }])

    ;

;