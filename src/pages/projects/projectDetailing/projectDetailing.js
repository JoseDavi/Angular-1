angular
  .module("appExemplo")
  .controller("projectDetailingController", function (ProjectService, $scope) {
    $scope.project = ProjectService.getCurrentProject();
    console.log($scope.project);

    $scope.back = function () {
      $scope.$emit("setList");
    };

    $scope.allStudents = angular.copy(ProjectService.getStudents());

    $scope.updateProject = function(){
      ProjectService.setCurrentProject($scope.project);
    }

    $scope.updateSelectedOptions = function () {
      $scope.project.students = $scope.allStudents.filter(function (option) {
        return option.selected;
      });
    };

      $scope.isSelected = function(student) {
        return $scope.project.students.some(function(std) {
          return std.id === student.id;
        });
      };
    

  });
