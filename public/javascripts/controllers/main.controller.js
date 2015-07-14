
var app = angular.module('MyApp', []);

app
  .controller('MainCtrl', function ($scope, PostsFactory, CommentsFactory) {
    var getAllPostsPromise = PostsFactory.get();

    getAllPostsPromise.success(function(data){
      $scope.posts = data;
    })

    $scope.loadComments = function(post){
      CommentsFactory.getOne(post.id).success(function(data){
            post.comments = data;
      })
    }
  });
