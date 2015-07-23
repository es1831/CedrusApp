'use strict';

angular.module('MyApp')
/*
Auth Factory
*/
  .factory('Auth', function($http) {
    return{
      get: function(user){
        return $http.get('/getUser');
        }
      }
  })
