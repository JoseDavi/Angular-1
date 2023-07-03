describe('projectController', function() {

    var $controller, $scope

    beforeEach(module('appExemplo'))

    beforeEach(inject(function(_$controller_, _$rootScope_){
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }))

    it('deve iniciar a tab corretamente', function() {
        $controller('projectsController', {$scope: $scope})

        expect($scope.tab).toBe('content')
    })

    it('deve alterar a tab para details com sucesso', function() {
        $controller('projectsController', {$scope: $scope})
    
        $scope.setTab('details')

        expect($scope.tab).toBe('details')
    })

    it('deve alterar a tab para "content" após receber o evento "setList"', function() {
        $controller('projectsController', {$scope: $scope})

        $scope.$emit('setList')

        expect($scope.tab).toBe('content')
    })

    it('deve alterar a tab para "details" após receber o evento "openDetails"', function() {
        $controller('projectsController', {$scope: $scope})

        $scope.$emit('openDetails')

        expect($scope.tab).toBe('details')
    })
})