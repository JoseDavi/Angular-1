describe('Teste do ngRoute', function() {
    var $route, $location, $rootScope, $httpBackend;
  
    beforeEach(module('appExemplo'));
  
    beforeEach(inject(function(_$route_, _$location_, _$rootScope_, _$httpBackend_) {
      $route = _$route_;
      $location = _$location_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
    }));
  
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  
    it('deve redirecionar para a rota /login por padrão', function() {
      $httpBackend.expectGET('pages/login/login.html').respond(200);//checa se o http esta levando para o login.html, .repond(200) é se for bem sucedido
  
      $location.path('/');
      $rootScope.$digest();
  
      expect($location.path()).toBe('/login');
      $httpBackend.flush()
    });
  
    it('deve carregar o template e o controller corretos para a rota /home', function() {
      $httpBackend.expectGET('pages/home/home.html').respond(200);
  
      $location.path('/home');
      $rootScope.$digest();
  
      expect($location.path()).toBe('/home');
      expect($route.current.templateUrl).toBe('pages/home/home.html');
      expect($route.current.controller).toBe('homeController');
      $httpBackend.flush()
    });
  
    it('deve carregar o template e o controller corretos para a rota /projects', function() {
      $httpBackend.expectGET('pages/projects/projects.html').respond(200);
  
      $location.path('/projects');
      $rootScope.$digest();
  
      expect($location.path()).toBe('/projects');
      expect($route.current.templateUrl).toBe('pages/projects/projects.html');
      expect($route.current.controller).toBe('projectsController');
      $httpBackend.flush()
    });
  });