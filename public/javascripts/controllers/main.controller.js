
var app = angular.module('MyApp', ['ui.bootstrap']);

app
  .controller('MainCtrl', function ($scope, Posts, Comments) {

    //Get all Posts
    var get_posts_promise = Posts.get();

    get_posts_promise.success(function(data) {
      $scope.posts = data;
    })

    //Load Posts
    $scope.loadComments = function(post) {
      Comments.getOne(post.id).success(function(data) {
            post.comments = data;
      })
    }

  });
