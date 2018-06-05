angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', '$http', function ($scope, $http) {
             var allQuestions = [];
             var iter = 0;
             var numberOfQuestions = 0;
             var results = [];
              $http
                .get("json/comp1.json")
                .then(function(response){
                  allQuestions = response.data.questions;
                  numberOfQuestions = response.data.numberOfQuestions;
                  $scope.currentQuestion = allQuestions[iter];
                });

              $scope.answerClick = function(i){
                results[iter] = i;
                if(iter < numberOfQuestions - 1){
                    iter = iter + 1;
                    $scope.currentQuestion = allQuestions[iter];
                }
                else alert("Letzte Frage erreicht");
              };

        }])

    ;

;