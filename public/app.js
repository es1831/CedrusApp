'use strict';

angular.module('MyApp', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute'
])
  .config(function ($urlRouterProvider, $locationProvider, $routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home'
      }).
      when('/page/about', {
        templateUrl: 'about'
      }).
      when('/page/contactUs', {
        templateUrl: 'contactUs'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
