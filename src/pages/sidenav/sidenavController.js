angular
  .module("appExemplo")
  .controller("sidenavController", function ($scope, $location) {
    $scope.pages = [
      {
        icon: "home",
        select: true,
        rediretUrl: "home",
      },
      {
        icon: "clipboard-lines",
        select: false,
        rediretUrl: "projects",
      },
    ];    
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
