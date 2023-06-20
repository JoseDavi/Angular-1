app.service("LoginService", function ($location, ProjectService) {
  var students = new Map();
  var teachers = new Map();
  students.set("davi", {
    type: "student",
    fullname: "José Davi",
    username: "davi",
    email: "davi@email.com",
    password: "123",
    cpassword: "123",
    institution: "UFCG",
    occupation: "student",
    formation: "CCC",
  });
  students.set("rafael", {
    type: "student",
    fullname: "Rafael de Souza",
    username: "rafael",
    email: "rafael@email.com",
    password: "123",
    cpassword: "123",
    institution: "UFCG",
    occupation: "student",
    formation: "CCC",
  });
  var user = null;
  count = 100;
  this.register = function (object) {
    if (object.type === "student") {
      students.set(object.username, object);
      ProjectService.addStudent({
        name: object.fullname,
        id: count,
        color1: "#9BC438",
        color2: "1px solid #436F00",
        selected: false,
      });
      count++;
      user = students.get(object.username);
    } else {
      teachers.set(object.username, object);
      user = teachers.get(object.username);
    }
    $location.path("/home");
  };

  this.login = function (username, password) {
    if (students.has(username)) {
      if (students.get(username).password === password) {
        user = students.get(username);
        $location.path("/home");
      } else {
        alert("Wrong username or password");
      }
    } else if (teachers.has(username)) {
      if (teachers.get(username).password === password) {
        $location.path("/home");
        user = teachers.get(username);
      } else {
        alert("Wrong username or password");
      }
    } else {
      alert("Wrong username or password");
    }
  };

  this.getUser = function () {
    return user;
  };
});
