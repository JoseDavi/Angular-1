describe('Sidenav Controller', function() {

    var $controller, $scope, $location, $rootScope

    beforeEach(module('appExemplo'));

    beforeEach(inject(function(_$controller_, _$location_, _$rootScope_){
        $controller = _$controller_;
        $location = _$location_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();
    }));

    it('checa se o controlador foi inicilizado corretamente', function() {
        $controller('sidenavController', {
            $scope: $scope,
            $location: $location,
            $rootScope: $rootScope
        });

        //Verifica se pages foi inicilizado corretamente
        expect($scope.pages.length).toEqual(2);
        expect($scope.pages[0].icon).toEqual('home');
        expect($scope.pages[0].select).toEqual(false);
        expect($scope.pages[0].rediretUrl).toEqual("/home");
        expect($scope.pages[1].icon).toEqual("clipboard-lines");
        expect($scope.pages[1].select).toEqual(false);
        expect($scope.pages[1].rediretUrl).toEqual("/projects");
    })

    it('deve fazer com que a pagina seja /home', function() {
        $controller('sidenavController', {
            $scope: $scope,
            $location: $location,
            $rootScope: $rootScope
        });

        $scope.setPage('home');

        expect($scope.pages[0].select).toEqual(true)
        expect($scope.pages[1].select).toEqual(false);
        expect($location.path()).toBe('/home')
    })

    it('deve fazer com que a pagina seja /projects', function() {
        $controller('sidenavController', {
            $scope: $scope,
            $location: $location,
            $rootScope: $rootScope
        });

        $scope.setPage('clipboard-lines');

        expect($scope.pages[0].select).toEqual(false)
        expect($scope.pages[1].select).toEqual(true);
        expect($location.path()).toBe('/projects')
    })


})