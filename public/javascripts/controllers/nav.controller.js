angular.module('MyApp')
  .controller('NavCtrl', function ($scope, Auth) {

    Auth.get().then(function(res){
      $scope.current_user = res.data;
    });

  });



