describe('HomeController', function(){
    
    var $scope, $location, $controller

    beforeEach(module('appExemplo'))

    beforeEach(inject(function ( _$controller_, _$location_, $rootScope){
        $controller = _$controller_;
        $location = _$location_;
        $scope = $rootScope.$new();
    }))

    it ('deve direcionar para a pagina de /projects quando usado', function(){
        var controller = $controller('homeController', {$scope: $scope, $location: $location});

        spyOn($location, 'path')

        $scope.setPage();

        expect($location.path).toHaveBeenCalledWith('/projects');
    });

    it('deve checar se o valor está snedo atribuido a variavel corretamente', function(){
        var controller = $controller('homeController', {$scope: $scope, $location: $location});

        expect($scope.projectList).toEqual('Project Listing');
    })
});