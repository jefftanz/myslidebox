/**
 * Created by jeff on 10/24/15.
 */

var app = angular.module('nutriking.controllers.slide', []);

app.controller('SlideCtrl', function($scope) {

  $scope.slides = [];
  for (var i = 1; i <= 5; i++){
    $scope.slides.push({
      title: 'Slide #' + i,
      description: 'This is the slide number ' + i
    });
  }

  $scope.activeSlide = 0;

  $scope.setSlide = function(index){
    $scope.activeSlide = index;
  };

});

