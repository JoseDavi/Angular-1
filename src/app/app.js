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
    .when("/projects/projectDetailing", {
      templateUrl: "pages/projects/projectDetailing/projectDetailing.html",
      controller: "projectDetailingController",
    })
    .when("/projects/projectListing", {
      templateUrl: "pages/projects/projectListing/projectListing.html",
      controller: "projectListingController",
    })
    .when("/projects/projectRegistration", {
      templateUrl: "pages/projects/projectRegistration/projectRegistration.html",
      controller: "projectRegistrationController",
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
