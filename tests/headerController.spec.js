describe('HeaderController', function() {
    var $scope, LoginService, $controller, $rootScope

    beforeEach(module('appExemplo'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
        LoginService = {
            getUser: function() {}
        };
    }));

    it('deve definir corretamente o userName no escopo', function() {
        var mockUser = {
            fullname: 'Rafael'
        };

        spyOn(LoginService, 'getUser').and.returnValue(mockUser);

        var controller = $controller('headerController', {$scope: $scope, LoginService: LoginService, $rootScope: $rootScope});

        expect($scope.userName).toBe(mockUser.fullname);
    });

    it('deve chamar a função init ao ser inicializado', function(){
        spyOn(LoginService, 'getUser');

        var controller = $controller('headerController', {$scope: $scope, LoginService: LoginService, $rootScope: $rootScope});

        expect(LoginService.getUser).toHaveBeenCalled();
    });

    
    it('deve chamar a função $init quando ocorre uma mudança de localização', function(){
        spyOn(LoginService, 'getUser');

        var controller = $controller('headerController', {$scope: $scope, LoginService: LoginService, $rootScope: $rootScope});

        $rootScope.$emit("$locationChangeStart");

        expect(LoginService.getUser).toHaveBeenCalled();
    });
})