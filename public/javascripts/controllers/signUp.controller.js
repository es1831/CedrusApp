angular.module('MyApp')
  .controller('SignUpCtrl', function ($scope, $rootScope, Auth, $location, $window) {

    $rootScope.newUser = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      state: '',
      city: '',
      isOver18: null,
      question: '',
      wantAdmin: null
    }

    $scope.verify = function(){
      Auth.create($rootScope.newUser).then(function(res){
        console.log('data frontend', res.data);
        $rootScope.newUser = res.data;
        $location.path('/stepTwo');
      })
    }
  });
