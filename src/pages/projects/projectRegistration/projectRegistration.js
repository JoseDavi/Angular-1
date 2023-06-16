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
        documents: [],
      };

      $scope.students = [
        {
          name: "Jose Davi",
          id: 1,
        },
        {
          name: "Rafael",
          id: 2,
        },
        {
          name: "Ennyo",
          id: 3,
        },
      ];

      $scope.cancel = function () {
        $scope.project = {
          name: "",
          coordinator: "",
          students: "",
          description: "",
          document: "",
        };
      };

      $scope.upload = function () {
        ProjectService.addProject($scope.project);
        $scope.$emit("newProject");
      };

      $scope.click = function () {
        document.getElementById("file-input-document").click();
      };

      $scope.inputFileChange = function (element) {
        console.log(element.files);
        $scope.project.documents = file;
      };
    }
  );
