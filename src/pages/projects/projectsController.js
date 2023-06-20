angular
  .module("appExemplo")
  .controller("projectsController", function ($scope) {
    $scope.tab = "content";

    $scope.setTab = function (tab) {
      $scope.tab = tab;
    };

    $scope.$on("setList", function () {
      $scope.tab = "content";
    });

    $scope.$on("openDetails", function () {
      $scope.tab = "details";
    });
  });
