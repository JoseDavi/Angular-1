describe('LoginServiceTest', function() {
    beforeEach(angular.mock.module('appExemplo'));

    var UserService;
    // beforeEach(inject(function(_UserService_){
    //     UserService = _UserService_;
    // }));S
    beforeEach(
        inject((_LoginService_) => {
            UserService = _LoginService_
        })
    );

    it('deve adicionar um aluno', function() {

        let user = {
            type: "student",
            fullname: "Lucas Emmanuel de Sousa Alves",
            username: "lucas",
            email: "lucas@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "student",
            formation: "CCC",
          }

          UserService.register(user)

          let quantidadeAlunos = 0;
          UserService.users.forEach((usuario) => {
              if (usuario.type === "student") {
                  quantidadeAlunos++;
              }
          })
            

          expect(UserService.users.size).toEqual(3);
          expect(quantidadeAlunos).toEqual(3); 
          expect(UserService.getUser()).toEqual(user);
    })


    it('deve adicionar um professor', function() {

        let user = {
            type: "teacher",
            fullname: "Adalberto Cajueiro",
            username: "adalberto",
            email: "adalberto@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "teacher",
            formation: "CCC",
          }
          
          UserService.register(user);
          
          
          let quantidadeAlunos = 0;
          UserService.users.forEach((usuario) => {
              if (usuario.type === "teacher") {
                  quantidadeAlunos++;
              }
          })
            

          expect(UserService.users.size).toEqual(3);
          expect(quantidadeAlunos).toEqual(1); 
          expect(UserService.getUser()).toEqual(user);
    })


    it('deve adicionar o valor passado do estudante no user corretamente', function() {

        UserService.login('rafael', '123');
        
        expect(UserService.getUser().username).toEqual('rafael');
    });

    it('deve adicionar o valor passado do professor no user corretamente', function(){

        let user = {
            type: "teacher",
            fullname: "Rafael de Souza",
            username: "rafael12",
            email: "rafael@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "student",
            formation: "CCC",
        }

        UserService.register(user);
        
        expect(UserService.getUser().username).toEqual('rafael12');
    });

})