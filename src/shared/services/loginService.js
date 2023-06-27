app.service("LoginService", function ($location, ProjectService) {
  const source = this;
  source.students = new Map();
  source.teachers = new Map();
  source.students.set("davi", {
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
  source.students.set("rafael", {
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
    const newObject = object[Object.keys(object)[0]];
    if (newObject.type === "student") {
      source.students.set(newObject.username, newObject);
      ProjectService.addStudent({
        name: newObject.fullname,
        id: count,
        color1: "#9BC438",
        color2: "1px solid #436F00",
        selected: false,
      });
      count++;
      user = source.students.get(newObject.username);
    } else if (newObject.type === "teacher"){
      source.teachers.set(newObject.username, newObject);
      user = source.teachers.get(newObject.username);
    }
    $location.path("/home");
  };

  this.login = function (username, password, role) {
    if (role === "student") {
      if (source.students.has(username)) {
        if (source.students.get(username).password === password) {
          user = source.students.get(username);
          $location.path("/home");
        } else {
          alert("Wrong username or password");
        }
      } else {
        alert("Wrong username or password");
      }
    } else if (role === "teacher") {
      if (this.getProfessors().has(username)) {
        if (this.getProfessors().get(username).password === password) {
          $location.path("/home");
          user = source.teachers.get(username);
        } else {
          alert("Wrong username or password");
        }
      } else {
        alert("Wrong username or password");
      }
    } else {
      alert("Wrong username or password");
    }
    // if (source.students.has(username)) {
    //   if (source.students.get(username).password === password) {
    //     user = source.students.get(username);
    //     $location.path("/home");
    //   } else {
    //     alert("Wrong username or password");
    //   }
    // } else if (source.teachers.has(username)) {
    //   if (source.teachers.get(username).password === password) {
    //     $location.path("/home");
    //     user = teachers.get(username);
    //   } else {
    //     alert("Wrong username or password");
    //   }
    // } else {
    //   alert("Wrong username or password");
    // }
  };

  this.getUser = function () {
    return user;
  };

  this.getProfessors = function () {
    return source.teachers;
  }

  this.getStudents = function() {
    return source.students;
  }
});
