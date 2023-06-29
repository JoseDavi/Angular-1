describe('ProjectServiceTest', function() {
    beforeEach(angular.mock.module('appExemplo'));

    let UserService;

    beforeEach(
        inject((_ProjectService_) => {
            UserService = _ProjectService_
        })
    );

    it('deve adicionar um projeto com sucesso com todos os atributos', function() {

        let project = {
            name: 'Projeto 20',
            description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            coordinator: 'Adalberto',
            students: [
                {
                    name: 'Rafael',
                    color1: '#5CC1EE',
                    color2: '1px solid #0063B8',
                    id: 1
                },
                {
                    name: 'José David',
                    color1: '#5CC1EE',
                    color2: '1px solid #0063B8',
                    id: 2
                },
                {
                    name: 'Lucas',
                    color1: '#5CC1EE',
                    color2: '1px solid #0063B8',
                    id: 3
                },
            ],
            document: null,
        }
          UserService.addProject(project);
          expect(UserService.getProjects().length).toEqual(7);
          expect(UserService.getProjects()[UserService.getProjects().length - 1].name).toEqual(project.name);
    })


    it('deve adicionar um estudante com sucesso', function() {

        let user = {
            type: "student",
            fullname: "Adalberto Cajueiro",
            username: "adalberto",
            email: "adalberto@email.com",
            password: "123",
            cpassword: "123",
            institution: "UFCG",
            occupation: "teacher",
            formation: "CCC",
          }

          UserService.addStudent(user);

          expect(UserService.getStudents().length).toEqual(4);
          expect(UserService.getStudents()[UserService.getStudents().length - 1]).toEqual(user);
    })


    it('deve atualizar um projeto com sucesso', function() {


        UserService.setCurrentProject(UserService.getProjects()[0]);
        let projectToEdit = UserService.getCurrentProject();
        projectToEdit.name = "Project 100"
        projectToEdit.description = "descrição do teste"
        projectToEdit.coordinator = "Rafael"
        projectToEdit.students = UserService.getStudents()[0], UserService.getStudents()[1]
        UserService.updateProject(projectToEdit);
        expect(UserService.getProjects()[0]).toEqual(projectToEdit);
    });


})