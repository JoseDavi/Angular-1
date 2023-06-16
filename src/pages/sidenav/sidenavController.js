angular
  .module("appExemplo")
  .controller("sidenavController", function ($scope, $location, $rootScope) {
    $scope.pages = [
      {
        icon: "home",
        select: false,
        rediretUrl: "/home",
      },
      {
        icon: "clipboard-lines",
        select: false,
        rediretUrl: "/projects",
      },
    ];

    $scope.init = function () {
      var currentPath = $location.path();
      $scope.pages.map(function (page) {
        if (currentPath === page.rediretUrl) {
          page.select = true;
        } else {
          page.select = false;
        }
      });
    };
    $scope.init();

    $rootScope.$on("$locationChangeStart", function () {
      $scope.init();
    });

    $scope.setPage = function (icon) {
      var rediretPage = "";
      $scope.pages.map(function (page) {
        if (page.icon === icon) {
          if (page.select) {
            return page;
          } else {
            page.select = true;
            rediretPage = page.rediretUrl;
            return page;
          }
        } else {
          page.select = false;
          return page;
        }
      });
      if (rediretPage !== "") {
        $location.path(rediretPage);
      }
    };
  });
