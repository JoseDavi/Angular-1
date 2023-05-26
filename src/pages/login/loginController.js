angular.module("appExemplo").controller("loginController", function ($scope) {
  $scope.showLogin = true;
  $scope.login = function () {
    console.log("login");
    //login
  };
});
