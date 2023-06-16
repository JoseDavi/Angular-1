app.controller("appController", function ($scope, $location) {
  $scope.isLoginPage = function () {
    var currentPath = $location.path();
    return currentPath === "/login";
  };
});
