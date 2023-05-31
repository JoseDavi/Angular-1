angular
  .module("appExemplo")
  .controller("projectRegistrationController", function ($scope) {
    $scope.project = {
      name: "",
      coordinator: "",
      student: "",
      description: "",
      document: "",
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

    $scope.documents = [];

    $scope.cancel = function () {
      $scope.project = {
        name: "",
        coordinator: "",
        student: "",
        description: "",
        document: "",
      };
    };

    $scope.upload = function () {
      console.log($scope.project);
    };

    $scope.click = function () {
      document.getElementById("file-input-document").click();
    };

    $scope.inputFileChange = function (element) {
      const file = element.files[0];
      console.log(file);
      $scope.documents = element.files;
      $scope.project.document = file;
    };
  });
