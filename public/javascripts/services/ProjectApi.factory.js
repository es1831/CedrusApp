'use strict';

angular.module('MyApp')
/*
Post Factory
*/
  .factory('Posts', function($http) {
    return{
      get: function(){
        return $http.get('http://jsonplaceholder.typicode.com/posts');
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/posts/' + id);
      }
    }
  })
/*
Comments Factory
*/
  .factory('Comments', function($http){
    return{
      get: function(){
        return $http.get('http://jsonplaceholder.typicode.com/comments')
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/comments?postId='+id);
      }
    }
  })
