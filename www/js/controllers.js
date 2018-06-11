angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', '$http', function ($scope, $http) {
        var allQuestions = [];
        var numberOfQuestions = 0;
        $scope.weiterBool = false;
        $http.get("json/comp1.json").then(function(response){
            allQuestions = response.data.questions;
            numberOfQuestions = allQuestions.length;
            $scope.currentQuestion = allQuestions[0];
        });

        $scope.naechsteFrage = function(){
            //To-Do: Antwort speichern
            $scope.selectedAnswer = 0;
            if($scope.currentQuestion.id < numberOfQuestions)
                $scope.currentQuestion = allQuestions[$scope.currentQuestion.id];
                else alert("Ende");
        }
    }])

    .controller('Comp2Ctrl', ['$scope', '$http', function ($scope, $http) {
        var allQuestions = [];
        var numberOfQuestions = 0;
        var wrongAnswers = 0;
        $scope.weiterBool = false;
        $http.get("json/comp2.json").then(function(response){
            allQuestions = response.data.questions;
            numberOfQuestions = allQuestions.length;
            $scope.currentQuestion = allQuestions[0];
        });

        $scope.naechsteFrage = function(){
            //To-Do: Antwort speichern
            if($scope.selectedAnswer == $scope.currentQuestion.correctAnswer){
                wrongAnswers = 0;
            }
            else{
                wrongAnswers++;
                if(wrongAnswers == 3){ alert("Abbruch"); }
            }
            $scope.selectedAnswer = 0;
            if($scope.currentQuestion.id < numberOfQuestions)
                $scope.currentQuestion = allQuestions[$scope.currentQuestion.id];
                else alert("Ende");
        }


    ;

;