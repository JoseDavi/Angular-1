angular.module("appExemplo").controller("projectDetailingController", function ($scope) {
    $scope.nameProject = "Name of Project";
    $scope.id = 0002;
    $scope.description = "Lorem Ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et dol, itaque, sed do eiusmod tempor incididunt, ullamcorper itaque";
    $scope.backButton = function() {
        window.history.back();
    }
    $scope.projectCoordinator = "luisthiago";
    $scope.students = [
        {
            name: "davigomes",
            class: "Júnior"
        },
        {
            name: "esteniosouza",
            class: "Pleno"
        },
        {
            name: "lucassantos",
            class: "Pleno"
        },
        {
            name: "gabrieloliveira",
            class: "Sênior"
        }
    ]
    $scope.upload = new Date(2022,17,7)
    $scope.comments = ""
    $scope.typeDocument = "Document - Any Generic Format"
    $scope.format = "pdf"
    $scope.fileSize = '820Kb'
});
