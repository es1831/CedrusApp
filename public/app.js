'use strict';

angular.module('MyApp', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute'
])
  .config(function ($urlRouterProvider, $locationProvider, $routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/page/home',
        controller: 'MainCtrl',
        resolve: {
          user: function(Auth){
            return Auth.get();
          }
        }
      }).
      when('/about', {
        templateUrl: '/page/about'
      }).
      when('/login', {
        templateUrl: '/page/login'
      }).
      when('/posts', {
        templateUrl: '/page/posts'
      }).
      when('/contactUs', {
        templateUrl: '/page/contactUs'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

/*
run function

app.run(['Auth','$rootScope', function(Auth, $rootScope){
  $rootScope.user = Auth.get();
}])
*/


















