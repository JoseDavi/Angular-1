// describe('LoginNgShow', function() {
//     var $compile, $rootScope, $scope, element, $httpBackend;

//     beforeEach(module('appExemplo'));

//     beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
//         $compile = _$compile_;
//         $rootScope = _$rootScope_;
//         $scope = $rootScope.$new();
//         $httpBackend = _$httpBackend_;
//     }))

//     beforeEach(inject(function($httpBackend) {
//         $httpBackend.whenGET('pages/login/login.html').respond(200, '');
//       }));
      

//     it('deve mostrar o login quando showLogin for true', function() {
//         $scope.showLogin = true;
//         element = angular.element('<div ng-show="showLogin" class="login flex"></div>');
//         $compile(element)($scope);
//         $rootScope.$digest();
//         var computedStyle = window.getComputedStyle(element[0]);
//         var displayValue = computedStyle.getPropertyValue('display');
  
//         $httpBackend.flush();

//         expect(displayValue).toBe('');
//       });

//       it('deve mostrar o conteúdo quando showLogin for true', function() {
//         $scope.showLogin = false;
//         element = $compile('<div ng-show="!showLogin" class="register flex"></div>')($scope);
//         $rootScope.$digest();
        
//         $httpBackend.flush();

//         expect(element.css('display')).toBe('');
//       });
// })