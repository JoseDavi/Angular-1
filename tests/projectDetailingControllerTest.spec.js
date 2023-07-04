describe('projectDetalingController', function () {
    var $scope, $controller, ProjectService, projects, students

    beforeEach(module('appExemplo'))

    beforeEach(inject(function (_$rootScope_, _$controller_, _ProjectService_){
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        ProjectService = _ProjectService_;
    }))

    beforeEach(function () {
        projects = [
            {
              name: "Project 1",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 6, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 1,
            },
            {
              name: "Project 2",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 6, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 2,
            },
            {
              name: "Project 3",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 6, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 3,
            },
            {
              name: "Project 4",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 5, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 4,
            },
            {
              name: "Project 5",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 6, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 5,
            },
            {
              name: "Project 6",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              date: new Date(2022, 6, 28),
              coordinator: "luisthiago",
              students: [
                {
                  name: "davigomes",
                  color1: "#5CC1EE",
                  color2: "1px solid #0063B8",
                  id:5
                },
                {
                  name: "estheniosouza",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:6
                },
                {
                  name: "lucassoarez",
                  color1: "#9BC438",
                  color2: "1px solid #436F00",
                  id:7
                },
              ],
              id: 6,
            },
          ];
        students = [
            {
              name: "Jose Davi",
              id: 1,
              color1: "#9BC438",
              color2: "1px solid #436F00",
              selected: false,
            },
            {
              name: "Rafael",
              id: 2,
              color1: "#9BC438",
              color2: "1px solid #436F00",
              selected: false,
            },
            {
              name: "Ennyo",
              id: 3,
              color1: "#9BC438",
              color2: "1px solid #436F00",
              selected: false,
            },
          ];

        ProjectService.setCurrentProject(projects[0]);
        ProjectService.setStudents(students);

        $controller('projectDetailingController', {
            $scope: $scope,
            ProjectService: ProjectService
        });
    })

    it('deve inicializar corretamente o controlador', function() {
        expect($scope.project).toEqual(projects[0]);
        expect($scope.detailing).toBe(true);
        expect($scope.projectEdit).toEqual(projects[0]);
        expect($scope.allStudents).toEqual(students);
      });

    it('deve atualizar o projeto corretamente', function() {
        $scope.projectEdit.document = 'Documento atualizado';
        $scope.project.document = '';

        spyOn(ProjectService, 'setCurrentProject');
        spyOn(ProjectService, 'updateProject');

        $scope.updateProject();

        expect(ProjectService.setCurrentProject).toHaveBeenCalledWith($scope.projectEdit);
        expect(ProjectService.updateProject).toHaveBeenCalledWith($scope.projectEdit);
        expect($scope.project).toEqual($scope.projectEdit);
        expect($scope.detailing).toBe(true);
    });
    
    it('deve cancelar a edição do projeto corretamente', function() {
        $scope.projectEdit.document = 'Documento editado';

        $scope.cancel();

        expect($scope.projectEdit).toEqual(projects[0]);
        expect($scope.detailing).toBe(true);
    });

    it('deve voltar para a lista corretamente', function() {
        spyOn($scope, '$emit');
    
        $scope.back();
    
        expect($scope.$emit).toHaveBeenCalledWith('setList');
      });

    it('deve atualizar as opções selecionadas corretamente', function() {
        $scope.allStudents[0].selected = true;
        $scope.allStudents[1].selected = true;

        $scope.updateSelectedOptions();

        expect($scope.projectEdit.students).toEqual([$scope.allStudents[0], $scope.allStudents[1]]);
    });

    it('deve verificar se um aluno está selecionado corretamente', function() {
        var student = $scope.project.students[0];
        expect($scope.isSelected(student)).toBe(true);
    
        student = { id: 100, name: 'Novo Aluno' };
        expect($scope.isSelected(student)).toBe(false);
      });

    it('deve mostrar ou ocultar a edição corretamente', function() {
        $scope.showEdit(false);
        expect($scope.detailing).toBe(false);

        $scope.showEdit(true);
        expect($scope.detailing).toBe(true);
    });

    it('deve alternar as opções corretamente', function() {
        $scope.showOptions = false;
        $scope.toggleOptions();
        expect($scope.showOptions).toBe(true);
    
        $scope.toggleOptions();
        expect($scope.showOptions).toBe(false);
      });
})