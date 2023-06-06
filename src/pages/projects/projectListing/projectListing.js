angular
  .module("appExemplo")
  .controller("projectListingController", function ($scope, $rootScope) {
    $scope.projects = [
      {
        name: "Project 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 6, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project1",
        selected: false,
      },
      {
        name: "Project 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 6, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project2",
        selected: false,
      },
      {
        name: "Project 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 6, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project3",
        selected: false,
      },
      {
        name: "Project 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 5, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project4",
        selected: false,
      },
      {
        name: "Project 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 6, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project5",
        selected: false,
      },
      {
        name: "Project 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date(2022, 6, 28),
        coordinator: "luisthiago",
        students: [
          {
            name: "davigomes",
            color1: "#5CC1EE",
            color2: "1px solid #0063B8",
          },
          {
            name: "estheniosouza",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
          {
            name: "lucassoarez",
            color1: "#9BC438",
            color2: "1px solid #436F00",
          },
        ],
        id: "project6",
        selected: false,
      },
    ];

    $scope.pages = [5, 10, 15, 20, 25];

    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.totalPages = Math.ceil($scope.projects.length / $scope.pageSize);

    $scope.paginateProjects = [];

    $scope.calculateView = function () {
      var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
      var endIndex = startIndex + $scope.pageSize;
      $scope.paginateProjects = $scope.projects.slice(startIndex, endIndex);
      console.log($scope.totalPages, $scope.projects, $scope.paginateProjects);
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

    $rootScope.$on("addProject", function (event, project) {
      console.log(event, project);
      $scope.projects.push({
        name: project.name,
        description: project.description,
        date: new Date(2022, 6, 28),
        coordinator: project.coordinator,
        students: [project.students],
        id: project.name.replace(" ", ""),
        selected: false,
      });
      $scope.updatePages();
    });
  })
  .filter("limitarTamanho", function () {
    return function (input, tamanho) {
      if (input.length > tamanho) {
        return input.substring(0, tamanho) + "...";
      }
      return input;
    };
  });
