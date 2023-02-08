$(function () {
  console.log("Hello World");
});

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + " " + this.surname + " " + this.salary;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary() {
        this.salary = salary + this.salary * 0.1;
    }
}
class Developer extends Employee {
    constructor(name, surname, job, salary, specialization,) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization;
    }
}
class Manager extends Employee{
    constructor(name, surname, job, salary, department){
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
    changeDepartment(newDepartment){
        this.department = newDepartment;
    }
}
var manager = new Manager("Tihana", "Fešiš", "programmer", "100.000$", );
var employee = new Employee("Darija", "Stankovic", "programer", 350);

employee.incresesalary();

console.log(employee.getsalary());

//-----------------------------------------

// Applications

function Web(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}
Web.prototype.isCCLicence = function () {
  if (this.licence === "CC") {
    return true;
  } else return false;
};

Web.prototype.like = function () {
  this.stars += 1;
};

Web.prototype.showStars = function () {
  return "The number of stars is: " + this.stars;
};

function WebApp(name, url, technologies, licence, stars) {
  Web.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies.split(",");
}

WebApp.prototype = Object.create(Web.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
  return (
    this.name +
    ", " +
    this.technologies +
    ", " +
    this.licence +
    ", " +
    this.stars
  );
};

WebApp.prototype.reactBased = function () {
  if (this.technologies.includes("React")) {
    return true;
  } else return false;
};

function MobileApp(name, platforms, licence, stars) {
  Web.call(this, name, licence, stars);
  this.platforms = platforms;
}

MobileApp.prototype = Object.create(Web.prototype);
MobileApp.prototype.constructor = WebApp;

MobileApp.prototype.getData = function () {
  return (
    this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars
  );
};

MobileApp.prototype.forAndroid = function () {
  if (this.technologies.includes("Android")) {
    return true;
  } else return false;
};

var web = new Web("facebook", "CC", 4);
var webApp = new WebApp(
  "Sportske Net",
  "https://sportske.net/",
  "React,PHP",
  "CC",
  2
);
var mobApp = new MobileApp("Flashscore", "Android,IOS", "CC", 5);

webApp.like();
console.log(webApp.showStars());