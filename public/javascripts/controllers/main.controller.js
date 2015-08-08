angular.module('MyApp')
  .controller('MainCtrl', function ($scope, Auth, Users) {

    Auth.get().then(function(res){
      $scope.current_user = res.data;
    });

    Users.get().then(function(res){
      console.log('users', $scope.users)
      $scope.users = res.data;
    })

  });

