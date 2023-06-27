app.service("ProjectService", function () {
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
  var currentProject;

  this.count = 100

  this.addProject = function (project) {
    projects.push({
      name: project.name,
      description: project.description,
      date: new Date(2022, 6, 28),
      coordinator: project.coordinator,
      students: project.students,
      document: project.document,
      id: count
    });
    count++;
  };

  this.getProjects = function () {
    return projects;
  };

  this.getStudents = function () {
    return students;
  };

  this.addStudent = function (student) {
    students.push(student);
  };

  this.setCurrentProject = function (project) {
    currentProject = project;
  };

  this.getCurrentProject = function () {
    return currentProject;
  };

  this.updateProject = function (project) {
    for(i = 0; i < projects.length; i++) {
      if(project.id === projects[i].id){
        projects[i] = project
      }
    }
  }
});
