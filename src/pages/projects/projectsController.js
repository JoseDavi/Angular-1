angular
  .module("appExemplo")
  .controller("projectsController", function ($scope, $rootScope) {
    $scope.tab = "content";
    $scope.setTab = function (tab) {
      $scope.tab = tab;
      console.log($scope.tab);
    };
    $scope.$on("newProject", function (event, project) {
      $scope.tab = "content";
    });
  });
