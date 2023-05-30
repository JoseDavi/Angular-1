var app = angular.module("appExemplo", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "pages/login/login.html",
      controller: "loginController",
    })
    .when("/home", {
      templateUrl: "pages/home/home.html",
      controller: "homeController",
    })
    .when("/projects", {
      templateUrl: "pages/projects/projects.html",
      controller: "projectsController",
    })
    .otherwise({ redirectTo: "/login" });
});

app.run([
  "$rootScope",
  function ($rootScope) {
    // Inicializando a variável global
    $rootScope.isLoginPageGeneral = true;
  },
]);
