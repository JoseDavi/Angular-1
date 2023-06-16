angular
  .module("appExemplo")
  .controller("projectListingController", function (ProjectService, $scope) {
    $scope.projects = ProjectService.getProjects();

    $scope.pages = [5, 10, 15, 20, 25];

    $scope.selectedPage = $scope.pages[0];
    $scope.pageSize = $scope.selectedPage;
    $scope.currentPage = 1;
    $scope.totalPages = Math.ceil($scope.projects.length / $scope.pageSize);

    $scope.paginateProjects = function () {
      var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
      var endIndex = startIndex + $scope.pageSize;
      $scope.paginateProjects = $scope.projects.slice(startIndex, endIndex);
    };

    $scope.previousPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage--;
        $scope.paginateProjects();
      }
    };

    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage++;
        $scope.paginateProjects();
      }
    };

    $scope.paginateProjects($scope.currentPage);
  })
  .filter("limitarTamanho", function () {
    return function (input, tamanho) {
      if (input.length > tamanho) {
        return input.substring(0, tamanho) + "...";
      }
      return input;
    };
  });
