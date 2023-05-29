angular.module("appExemplo").controller("loginController", function ($scope) {
  $scope.showLogin = true;
  $scope.username = "";
  $scope.password = "";
  $scope.type = "student";
  $scope.user = {
    type: "",
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    institution: "",
    occupation: "",
    formation: "",
  };
  $scope.login = function () {
    console.log(
      "login: ",
      "user",
      $scope.username,
      "password",
      $scope.password
    );
    //login
  };
  $scope.register = function () {
    $scope.user.type = $scope.type;
    console.log($scope.user);
  };
});
