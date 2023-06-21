angular
  .module("appExemplo")
  .controller("projectDetailingController", function (ProjectService, $scope) {
    $scope.project = ProjectService.getCurrentProject();
    $scope.detailing = true;


    $scope.allStudents = angular.copy(ProjectService.getStudents());


    

    $scope.updateProject = function(project){
      $scope.$watch(function () {
        return document.getElementById('projectName').value;
      }, function(novoNome){
        $scope.project.name = novoNome;
      })
    
      $scope.$watch(function () {
        return document.getElementById('projectDescription').value;
      }, function(novaDescription){
        $scope.project.description = novaDescription;
      })

      ProjectService.setCurrentProject(project);
      $scope.showEdit(true);
    }


    $scope.backListing = function () {
      history.go(-1);
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

      $scope.showEdit = function(value) {
        $scope.detailing = value;  
      }

  });
