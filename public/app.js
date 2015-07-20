'use strict';

angular.module('MyApp', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute'
])
  .config(function ($urlRouterProvider, $locationProvider, $routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/page/home'
      }).
      when('/about', {
        templateUrl: '/page/about'
      }).
      when('/contactUs', {
        templateUrl: '/page/contactUs'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
