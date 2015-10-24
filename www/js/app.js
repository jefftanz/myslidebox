(function(){

  app = angular.module('nutriking', [
    'ionic',
    'nutriking.controllers.slide'
  ]);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('slide', {
        url: "/slide",
        cache: false,
        controller: 'SlideCtrl',
        templateUrl: "templates/slide.html"
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/slide');

  });


}());
