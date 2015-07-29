angular.module('MyApp')
  .controller('StepThreeCtrl', function ($scope, $rootScope, Auth, DropDown, $location) {

    $scope.states = DropDown.getStates();
    $rootScope.newUser;


    $scope.getCities = function(city){
      $scope.cities = DropDown.getCities(city);
    }


    $scope.verify = function(){
      Auth.create($rootScope.newUser).then(function(res){
        if(res.data.message){
          Materialize.toast(res.data.message, 4000)
        }
        else{
          $location.path('/login');
        }
      })
    }

  });
