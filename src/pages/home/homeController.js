angular
  .module("appExemplo")
  .controller("homeController", function ($rootScope) {
    // Modificando a variável global através do escopo do controller
    $rootScope.isLoginPageGeneral = false;
  });
