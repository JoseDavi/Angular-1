describe('appControllerTest', function() {
    var $controller, $scope, $location

    beforeEach(module('appExemplo'));

    beforeEach(inject(function(_$controller_, $rootScope, _$location_){
        $controller = _$controller_;
        $scope = $rootScope.$new();
        $location = _$location_;
    }))

    it('deve retornar true para a rota /login', function() {
        $location.path('/login');

        var controller = $controller('appController', {$scope: $scope, $location: $location});

        expect($scope.isLoginPage()).toBe(true);
    });

    it('deve retornar false para as rotas diferente de /login', function() {
        $location.path('/home');

        var controller = $controller('appController', {$scope: $scope, $location: $location})

        expect($scope.isLoginPage()).toBe(false);


        $location.path('/projects');

        expect($scope.isLoginPage()).toBe(false);
    })
})