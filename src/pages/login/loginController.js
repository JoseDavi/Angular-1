angular
  .module("appExemplo")
  .controller("loginController", function ($scope, LoginService) {
    $scope.showLogin = true;
    $scope.username = "";
    $scope.password = "";
    $scope.type = "student";
    $scope.user = {
      type: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
      institution: "",
      occupation: "",
      formation: "",
    };

    $scope.login = function () {
      LoginService.login($scope.username, $scope.password);
    };

    $scope.register = function () {
      $scope.user.type = $scope.type;
      LoginService.register($scope.user);
    };
  });
