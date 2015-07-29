angular.module('MyApp')
  .controller('StepTwoCtrl', function ($scope, $rootScope, Auth, $location) {

    $scope.verify = function(){
      Auth.create($rootScope.newUser).then(function(res){
        $rootScope.newUser = res.data;
        $location.path('/stepThree');
      })
    }

  });
