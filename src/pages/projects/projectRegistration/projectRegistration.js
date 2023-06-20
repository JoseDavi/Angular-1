angular
  .module("appExemplo")
  .controller(
    "projectRegistrationController",
    function ($scope, ProjectService) {
      $scope.project = {
        name: "",
        coordinator: "",
        students: [],
        description: "",
        document: {},
      };

      $scope.students = ProjectService.getStudents();

      $scope.toggleOptions = function () {
        $scope.showOptions = !$scope.showOptions;
      };

      $scope.updateSelectedOptions = function () {
        $scope.project.students = $scope.students.filter(function (option) {
          return option.selected;
        });
      };

      $scope.cancel = function () {
        $scope.project = {
          name: "",
          coordinator: "",
          students: [],
          description: "",
          document: {},
        };
      };

      $scope.upload = function () {
        ProjectService.addProject($scope.project);
        $scope.$emit("setList");
      };

      $scope.click = function () {
        document.getElementById("file-input-document").click();
      };

      $scope.inputFileChange = function (element) {
        $scope.project.document = element.files[0];
      };
    }
  );
