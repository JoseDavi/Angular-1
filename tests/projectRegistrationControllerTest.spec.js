describe('ProjectResgistrationController', function() {
    var $controller, $scope, ProjectService

    beforeEach(module('appExemplo'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _ProjectService_){
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        ProjectService = _ProjectService_;
        
        $controller('projectRegistrationController', {
            $scope: $scope,
            ProjectService: ProjectService
        })
    }))

    

    it('deve inicializar o projeto corretamente', function() {
        expect($scope.project).toEqual(
            {
                name: "",
                coordinator: "",
                students: [],
                description: "",
                document:{}
            }
        );
    })

    it('deve carregar os estudantes corretamente', function() {
        var students = [
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

        spyOn(ProjectService, 'getStudents').and.returnValue(students);

        expect($scope.students).toEqual(students)
    })

    it('deve checar se o toggleOptions está funcionando', function() {
        $scope.showOptions = false;

        $scope.toggleOptions();

        expect($scope.showOptions).toEqual(true)

        $scope.toggleOptions();

        expect($scope.showOptions).toEqual(false)
    })

    it('deve atualizar as opções selecionadas com sucesso', function() {
        $scope.students = [
            {
              name: "Jose Davi",
              id: 1,
              color1: "#9BC438",
              color2: "1px solid #436F00",
              selected: true,
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
              selected: true,
            }
        ];

        $scope.updateSelectedOptions();

        expect($scope.project.students).toEqual([
            {
                name: "Jose Davi",
                id: 1,
                color1: "#9BC438",
                color2: "1px solid #436F00",
                selected: true,
            },
            {
                name: "Ennyo",
                id: 3,
                color1: "#9BC438",
                color2: "1px solid #436F00",
                selected: true,
              }
        ])
    })

    it("deve cancelar o projeto corretamente", function () {
        $scope.project = {
            name: "Teste",
            coordinator: "Fulano",
            students: [{
                name: "Jose Davi",
                id: 1,
                color1: "#9BC438",
                color2: "1px solid #436F00",
                selected: true,
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
                selected: true,
              }],
            description: "Lorem Ipsum dolor sit amet",
            document: {}
        }

        $scope.cancel();

        expect($scope.project).toEqual({
            name: "",
            coordinator: "",
            students: [],
            description: "",
            document: {},
          })
    })

    it('deve adicionar um projeto com sucesso', function(){
        let project = {
            name: "teste",
            coordinator: "Fulano",
            students: [{
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
                selected: true,
              }],
            description: "Lorem Ipsum Dolor sit amet",
            document: {}
        };

        spyOn(ProjectService, 'addProject')
        spyOn($scope, '$emit');

        $scope.project = project;

        $scope.upload();

        expect(ProjectService.addProject).toHaveBeenCalledWith(project)
        expect($scope.$emit).toHaveBeenCalledWith('setList');
    })

    it('deve clicar no input de arquivo corretamente', function(){
        var inputElement = jasmine.createSpyObj('inputElement', ['click']);
        
        spyOn(document, 'getElementById').and.returnValue(inputElement)

        $scope.click()

        expect(document.getElementById).toHaveBeenCalledWith('file-input-document')
        expect(inputElement.click).toHaveBeenCalled();
    })

    it('deve atualizar o arquivo corretamente', function(){
        var file = { name: 'file.pdf' }
        var element = { files: [file] }

        $scope.inputFileChange(element);

        expect($scope.project.document).toEqual(file)
    })
})    