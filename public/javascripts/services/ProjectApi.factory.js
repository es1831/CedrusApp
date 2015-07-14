'use strict';

angular.module('MyApp')
  .factory('PostsFactory', function ($http) {
    return{
      get: function(){
        return $http.get('http://jsonplaceholder.typicode.com/posts');
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/posts/' + id);
      }
    }
  })
  .factory('CommentsFactory', function($http){
    return{
      getAll: function(){
        return $http.get('http://jsonplaceholder.typicode.com/comments')
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/comments?postId='+id);
      }
    }
  })
