angular
  .module("appExemplo")
  .controller("headerController", function ($scope, LoginService, $rootScope) {
    $scope.userName = LoginService.getUser()?.fullname;

    $scope.init = function () {
      $scope.userName = LoginService.getUser()?.fullname;
    };
    $scope.init();

    $rootScope.$on("$locationChangeStart", function () {
      $scope.init();
    });
  });
