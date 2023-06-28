app.service("LoginService", function ($location, ProjectService) {
  const source = this;
  source.users = new Map();
  source.users.set("davi", {
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
  source.users.set("rafael", {
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
        source.users.set(object.username, object);
        ProjectService.addStudent({
          name: object.fullname,
          id: count,
          color1: "#9BC438",
          color2: "1px solid #436F00",
          selected: false,
        });
        count++;
        user = source.users.get(object.username);
      } else{
        source.users.set(object.username, object);
        user = source.users.get(object.username);
      }
      $location.path("/home");
  };

  let checkRegister = function(object){
    return source.users.has(Object.keys(object)[0])
  }

  this.login = function (username, password) {
    
    if (source.users.has(username)) {
      if (source.users.get(username).password === password) {
        user = source.users.get(username);
        $location.path("/home");
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

  this.getUsers = function () {
    return source.users;
  }
});
