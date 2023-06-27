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

        let user = {"Lucas Emmanuel": {
            type: "student",
            fullname: "Lucas Emmanuel de Sousa Alvez",
            username: "lucas",
            email: "lucas@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "student",
            formation: "CCC",
          }}

          UserService.register(user);
          expect(UserService.getStudents().size).toEqual(3);
          expect(UserService.getUser()).toEqual(user["Lucas Emmanuel"]);
    })


    it('deve adicionar um professor', function() {

        let user = {"Adalberto": {
            type: "teacher",
            fullname: "Adalberto Cajueiro",
            username: "adalberto",
            email: "adalberto@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "teacher",
            formation: "CCC",
          }}

          UserService.register(user);

          expect(UserService.teachers.size).toEqual(1);
          expect(UserService.getUser()).toEqual(user.Adalberto);
    })


    it('deve adicionar o valor passado do estudante no user corretamente', function() {

        UserService.login('rafael', '123', "student");
        
        expect(UserService.getUser().username).toEqual('rafael');
    });

    it('deve adicionar o valor passado do professor no user corretamente', function(){

        let user = { "rafael": {
            type: "teacher",
            fullname: "Rafael de Souza",
            username: "rafael",
            email: "rafael@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "student",
            formation: "CCC",
        }}

        UserService.register(user);
        UserService.login('rafael', '123', "teacher");
        
        expect(UserService.getUser().username).toEqual('rafael');
    });


})