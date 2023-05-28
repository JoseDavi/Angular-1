angular
  .module("appExemplo")
  .controller("homeController", function ($rootScope, $scope) {
    // Modificando a variável global através do escopo do controller
    $rootScope.isLoginPageGeneral = false;
    $scope.projectList = "Project Listing"
    
  });
