'use strict';

angular.module('MyApp')
/*
Auth Factory
*/
  .factory('Auth', function($http) {
    return{
      get: function(user){
        return $http.get('/getUser');
      },
      create: function(newUser){
        return $http.post('/verify', newUser);
      }
    }
  })
