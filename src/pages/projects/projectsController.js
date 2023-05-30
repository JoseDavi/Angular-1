angular.module("appExemplo").controller("projectsController", function ($scope, $location) {
    /*
    $scope.pages = [
        {
            text: "Listing",
            select: true,
            rediretUrl: "projects/projectListing",
        },
        {
            text: "Registration",
            select: false,
            rediretUrl: "projects/projectRegistration",
        },
    ];
    $scope.setPage = function (text){
        var redirectPage = "";
        $scope.pages.map(function (page){
            if(page.text === text){
                if(page.select){
                    return page;
                }else{
                    page.select = true;
                    redirectPage = page.rediretUrl
                    return page;
                }
            } else {
                page.select = false;
                return page;
            }
        });
        if(redirectPage !== ""){
            $location.path(redirectPage);           
        }
    }
    */
});
