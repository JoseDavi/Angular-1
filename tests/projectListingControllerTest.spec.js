describe('projectListingController', function () {
    var $controller, $scope, ProjectService

    beforeEach(module('appExemplo'))

    beforeEach(inject(function(_$controller_, _$rootScope_, _ProjectService_){
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        ProjectService = _ProjectService_;

        $controller('projectListingController', {
            $scope: $scope
        })
    }))

    it('deve inicializar corretamente', function() {
        var projects = [
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
          ]; // todos os projetos
        
        var paginateProjects = [{
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
          }] // apenas os 5 primeiros projetos que é o que sera mostrado na tela
    
        spyOn(ProjectService, 'getProjects').and.returnValue(projects);
    
        $controller('projectListingController', { $scope: $scope });
    
        expect(ProjectService.getProjects).toHaveBeenCalled();
        expect($scope.projects).toEqual(projects);
        expect($scope.pageSize).toEqual(5);
        expect($scope.currentPage).toEqual(1);
        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects).toEqual(paginateProjects);
      });

      it('deve atualizar a paginação corretamente', function() {
        $controller('projectListingController', { $scope: $scope });
        var projects = [
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

        $scope.projects = projects;
        $scope.currentPage = 2;
        $scope.pageSize = 2;

        $scope.updatePages();

        expect($scope.totalPages).toEqual(2);
        expect($scope.paginateProjects)

      })
})