angular
  .module("appExemplo")
  .controller("projectListingController", function (ProjectService, $scope) {
    $scope.projects = ProjectService.getProjects();
    $scope.pages = [5, 10, 15, 20, 25];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.totalPages = Math.ceil($scope.projects.length / $scope.pageSize);
    $scope.paginateProjects = [];

    $scope.calculateView = function () {
      var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
      var endIndex = startIndex + $scope.pageSize;
      $scope.paginateProjects = $scope.projects.slice(startIndex, endIndex);
    };

    $scope.updatePages = function () {
      $scope.totalPages = Math.ceil($scope.projects.length / $scope.pageSize);
      $scope.calculateView();
    };

    $scope.previousPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage--;
        $scope.calculateView();
      }
    };

    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage++;
        $scope.calculateView();
      }
    };

    $scope.firstPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage = 1;
        $scope.calculateView();
      }
    };

    $scope.lastPage = function () {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage = Math.ceil(
          $scope.projects.length / $scope.pageSize
        );
        $scope.calculateView();
      }
    };

    $scope.select = function (project) {
      if (project.selected == true) {
        var value = false;
      } else {
        var value = true;
      }

      let value1 = project.id;
      let values = document.getElementById(value1);
      values.checked = value;

      var indice = $scope.projects.indexOf(project);
      $scope.projects[indice].selected = value;
    };

    $scope.selectAll = function () {
      for (var i = 0; i < $scope.paginateProjects.length; i++) {
        $scope.select($scope.paginateProjects[i]);
      }
    };

    $scope.openDetails = function (project) {
      $scope.$emit("openDetails");
      ProjectService.setCurrentProject(project);
    };

    $scope.calculateView();
  })
  .filter("limitarTamanho", function () {
    return function (input, tamanho) {
      if (input.length > tamanho) {
        return input.substring(0, tamanho) + "...";
      }
      return input;
    };
  });
