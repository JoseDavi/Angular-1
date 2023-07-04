describe('projectListingController', function () {
    var $controller, $scope, ProjectService, projects, page1, page2

    beforeEach(module('appExemplo'))

    beforeEach(inject(function(_$controller_, _$rootScope_, _ProjectService_){
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        ProjectService = _ProjectService_;

        $controller('projectListingController', {
          ProjectService: ProjectService,
          $scope: $scope
        })
    }))

    beforeEach(function() {
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
      page1 = [{
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
      }]
      page2 = [{
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
      },]
    })

    it('deve inicializar corretamente', function() {
    
        spyOn(ProjectService, 'getProjects').and.returnValue(projects);
    
        $controller('projectListingController', { $scope: $scope });
    
        expect(ProjectService.getProjects).toHaveBeenCalled();
        expect($scope.projects).toEqual(projects);
        expect($scope.pageSize).toEqual(5);
        expect($scope.currentPage).toEqual(1);
        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page1);
      });

      it('deve atualizar a paginação corretamente', function() {
        $controller('projectListingController', { $scope: $scope });

        $scope.projects = projects;
        $scope.currentPage = 2;
        $scope.pageSize = 5;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page2) 

      })

      it('deve fazer com que volte para a pagina anterior', function() {

        $scope.projects = projects;
        $scope.currentPage = 2;
        $scope.pageSize = 5;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page2)
        expect($scope.currentPage).toEqual(2);

        $scope.previousPage();

        expect($scope.currentPage).toEqual(1);
        expect($scope.paginateProjects).toEqual(page1)
      })

      it('não vai para a pagina anterior ja que esta na pagina 1', function() {

        $scope.projects = projects;
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page1)
        expect($scope.currentPage).toEqual(1);

        $scope.previousPage();

        expect($scope.currentPage).toEqual(1);
        expect($scope.paginateProjects).toEqual(page1)
      })

      it('deve fazer com que vá para a próxima página', function() {

        $scope.projects = projects;
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page1)
        expect($scope.currentPage).toEqual(1);

        $scope.nextPage();

        expect($scope.currentPage).toEqual(2);
        expect($scope.paginateProjects).toEqual(page2)
      })

      it('deve fazer com que o next page não possa ser possivel, pois está na ultima página', function() {

        $scope.projects = projects;
        $scope.currentPage = 2;
        $scope.pageSize = 5;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(page2)
        expect($scope.currentPage).toEqual(2);

        $scope.nextPage();

        expect($scope.currentPage).toEqual(2);
        expect($scope.paginateProjects).toEqual(page2)
      })

      it('deve ir para a primeira página', function(){

        $scope.projects = projects;
        $scope.currentPage = 4;
        $scope.pageSize = 1;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(6);
        expect($scope.paginateProjects).toEqual([{
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
        },])
        expect($scope.currentPage).toEqual(4);

        $scope.firstPage();

        expect($scope.currentPage).toEqual(1);
        expect($scope.paginateProjects).toEqual([{
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
        },])
      } )

      it('deve se manter na primeira pagina', function() {
        $scope.projects = projects;
        $scope.currentPage = 1;
        $scope.pageSize = 1;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(6);
        expect($scope.paginateProjects).toEqual([{
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
        },])
        expect($scope.currentPage).toEqual(1);

        $scope.firstPage();

        expect($scope.currentPage).toEqual(1);
        expect($scope.paginateProjects).toEqual([{
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
        },])
      })

      it('deve ir para a última página', function(){

        $scope.projects = projects;
        $scope.currentPage = 4;
        $scope.pageSize = 1;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(6);
        expect($scope.paginateProjects).toEqual([{
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
        },])
        expect($scope.currentPage).toEqual(4);

        $scope.lastPage();

        expect($scope.currentPage).toEqual(6);
        expect($scope.paginateProjects).toEqual(page2)
      } )

      it('deve se manter na ultima posição', function() {
        $scope.projects = projects;
        $scope.currentPage = 6;
        $scope.pageSize = 1;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(6);
        expect($scope.paginateProjects).toEqual(page2)
        expect($scope.currentPage).toEqual(6);

        $scope.lastPage();

        expect($scope.currentPage).toEqual(6);
        expect($scope.paginateProjects).toEqual(page2);
    })

    it('deve selecionar um projeto corretamente', function() {
      $scope.projects = projects
      var firstProject = $scope.projects[0]
      var checkBoxElement = jasmine.createSpyObj('checkboxElement', ['click'])
      spyOn(document, 'getElementById').and.returnValue(checkBoxElement)

      $scope.select(firstProject)

      expect(document.getElementById).toHaveBeenCalledWith(firstProject.id);
      expect(checkBoxElement.checked).toBe(true)
      expect(firstProject.selected).toBe(true)
    })

    it('deve emitir o "open details" corretamente', function(){
      $scope.projects = projects
      var project = $scope.projects[0]

      spyOn($scope, '$emit')
      spyOn(ProjectService, 'setCurrentProject')

      $scope.openDetails(project);

      expect($scope.$emit).toHaveBeenCalledWith('openDetails')
      expect(ProjectService.setCurrentProject).toHaveBeenCalledWith(project)
    })
})