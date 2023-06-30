describe('LoginController', function () {
    var $controller, $scope, LoginService

    beforeEach(module('appExemplo'))

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_
        $scope = {}
        LoginService = {
            login: function () {},
            register: function () {}
        } 
    }))

    it('deve inicializar corretamente a classe', function () {
        var controller = $controller('loginController', {$scope: $scope, LoginService: LoginService})

        expect($scope.showLogin).toEqual(true);
        expect($scope.username).toEqual("");
        expect($scope.password).toEqual("");
        expect($scope.type).toEqual("student");
        expect($scope.user.type).toEqual("");
        expect($scope.user.fullname).toEqual("");
        expect($scope.user.username).toEqual("");
        expect($scope.user.email).toEqual("");
        expect($scope.user.password).toEqual("");
        expect($scope.user.cpassword).toEqual("");
        expect($scope.user.institution).toEqual("");
        expect($scope.user.occupation).toEqual("");
        expect($scope.user.formation).toEqual("");
    })

    it('deve chamar a função login do LoginService ao chamar $scope.login', function(){
        spyOn(LoginService, 'login');

        var controller = $controller('loginController', {$scope: $scope, LoginService: LoginService})

        $scope.username = "rafael"
        $scope.password = "123"
        $scope.login();

        expect(LoginService.login).toHaveBeenCalledWith($scope.username, $scope.password);
    })

    it('deve chamar a função register de LoginService ao chamar $scope.register', function(){
        spyOn(LoginService, 'register');

        var controller = $controller('loginController', {$scope: $scope, LoginService: LoginService})

        $scope.type = "teacher"
        $scope.user.fullname = "Adalberto"
        $scope.register();

        expect(LoginService.register).toHaveBeenCalledWith($scope.user);
    })

})