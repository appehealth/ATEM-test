angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var allQuestions = [];
        var numberOfQuestions = 0;
        $scope.nextBool = false;
        $http.get("json/comp1.json").then(function(response){
            allQuestions = response.data.questions;
            numberOfQuestions = allQuestions.length;
            $scope.currentQuestion = allQuestions[0];
        });

        $scope.nextQuestion = function(){
            //To-Do: Antwort speichern
            $scope.selectedAnswer = 0;
            if($scope.currentQuestion.id < numberOfQuestions)
                $scope.currentQuestion = allQuestions[$scope.currentQuestion.id];
                else $window.location = '#/comp2';
        }
    }])

    .controller('Comp2Ctrl', ['$scope', '$http', function ($scope, $http) {
        var allQuestions = [];
        var story = [];
        var numberOfQuestions = 0;
        var wrongAnswers = 0;
        $scope.storyMode = true;
        $scope.nextBool = false;
        $http.get("json/comp2.json").then(function(response){
            allQuestions = response.data.questions;
            story = response.data.story;
            numberOfQuestions = allQuestions.length;
            $scope.currentQuestion = allQuestions[0];
            $scope.currentStory = story[0];
        });

        $scope.nextQuestion = function(){
            //To-Do: Antwort speichern
            if($scope.selectedAnswer == $scope.currentQuestion.correctAnswer){
                wrongAnswers = 0;
            }
            else{
                wrongAnswers++;
                if(wrongAnswers == 3){ alert("Abbruch"); }
            }
            $scope.selectedAnswer = 0;
            if($scope.currentQuestion.id < numberOfQuestions){
                $scope.currentQuestion = allQuestions[$scope.currentQuestion.id];
                if($scope.currentQuestion.flag){
                    $scope.storyMode = true;
                }
            }
            else alert("Ende");
        }

        $scope.nextStory = function(){

        }
    }])



    ;

;