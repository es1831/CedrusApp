angular.module('MyApp')
  .controller('MainCtrl', function ($scope, Auth) {

    Auth.get().then(function(res){
      $scope.current_user = res.data;
    });

  });

