angular.module("appExemplo").controller("appController", [
  "$scope",
  "$rootScope",
  function ($scope, $rootScope) {
    $scope.isLoginPage = $rootScope.isLoginPageGeneral;
  },
]);
