angular.module("appExemplo").controller("projectListingController", function ($scope) {
    $scope.projects = [
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 6, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        }, 
        {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 6, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        }, 
        {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 6, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        },{ 
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 5, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        },{ 
            name: "Project 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 6, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        },{ 
            name: "Project 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date(2022, 6, 28),
            coordinator: "luisthiago",
            students:[
                {
                    name: 'davigomes'
                },
                {
                    name: 'estheniosouza'
                },
                {
                    name: 'lucassoarez'
                },

            ], id:1
        }
    ]
}).filter('limitarTamanho', function(){
    return function(input, tamanho) {
        if(input.length > tamanho){
            return input.substring(0, tamanho) + '...';
        }
        return input;
    }
});
