'use strict';

angular.module('MyApp')
  .directive('angTable', function($http) {
      return {
          restrict: 'A',
          scope: {
              data: '='
          },
          link: function(scope, element, attrs){

          }
      };
  });
