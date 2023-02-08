"use strict";

class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getStudentData() {
    var student = `${this.name} ${this.surname}`;
    return student;
  }
}