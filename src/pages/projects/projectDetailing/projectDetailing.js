angular
  .module("appExemplo")
  .controller("projectDetailingController", function (ProjectService, $scope) {
    $scope.project = ProjectService.getCurrentProject();
  });
