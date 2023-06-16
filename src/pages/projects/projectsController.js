angular
  .module("appExemplo")
  .controller("projectsController", function ($scope) {
    $scope.tab = "content";

    $scope.setTab = function (tab) {
      $scope.tab = tab;
      console.log($scope.tab);
    };

    $scope.$on("newProject", function () {
      $scope.tab = "content";
    });

    $scope.$on("openDetails", function () {
      $scope.tab = "details";
    });
  });
