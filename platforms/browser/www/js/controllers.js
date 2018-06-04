angular.module('App.controllers', [])

    .controller('IntroCtrl', ['$scope', function ($scope) {

        }])

    .controller('Comp1Ctrl', ['$scope', 'loadQuestion', function ($scope, loadQuestion) {
        var questionData;

            loadQuestion.get(1).then(function (data) {
            questionData = data;
            console.log(data);
            }, function (error) {
            console.log(error);
            });

        $scope.frageladen = function(){
           // alert(answerNo);
           $scope.question = questionData.question1;
        }
        }])

    ;

;