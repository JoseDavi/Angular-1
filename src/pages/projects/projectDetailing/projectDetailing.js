angular
  .module("appExemplo")
  .controller("projectDetailingController", function (ProjectService, $scope) {
    $scope.project =  ProjectService.getCurrentProject();
    $scope.detailing = true;
    $scope.projectEdit = angular.copy(ProjectService.getCurrentProject());

    $scope.allStudents = angular.copy(ProjectService.getStudents());


    $scope.updateProject = function(){
      $scope.projectEdit.document = $scope.project.document;
      ProjectService.setCurrentProject($scope.projectEdit);
      ProjectService.updateProject($scope.projectEdit);
      $scope.project = ProjectService.getCurrentProject();
      $scope.showEdit(true);
    }

    $scope.cancel = function() {
      $scope.projectEdit = angular.copy(ProjectService.getCurrentProject());
      $scope.showEdit(true);
    }


    $scope.back = function () {
      $scope.$emit("setList");
    };


    $scope.updateSelectedOptions = function () {
      $scope.projectEdit.students = $scope.allStudents.filter(function (option) {
        return option.selected;
      });
    };

      $scope.isSelected = function(student) {
        return $scope.project.students.some(function(std) {
          return std.id === student.id;
        });
      };

      $scope.showEdit = function(value) {
        $scope.detailing = value;  
      }


      $scope.toggleOptions = function () {
        $scope.showOptions = !$scope.showOptions;
      };
  });
