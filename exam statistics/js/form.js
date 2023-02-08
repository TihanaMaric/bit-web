"use strict";

// validate form (form.js)
var collectData = function () {
  // need name and surname from one input

  var student = document.getElementById("name").value.trim().split(" ");
  var [studentName, ...studentSurnameArr] = student;
  var studentSurname = studentSurnameArr.join(" ");

  var people = new Student(studentName, studentSurname);
  var subject = new Subject(document.getElementById("subject").value);
  var exam = new Exam(subject, people, document.getElementById("grade").value);

  return exam;
};

var validateData = function (exam) {
  var nameValid, gradeValid;

  // Both name and surname should be provided and both should start with capitals.
  if (
    exam.student.name &&
    exam.student.surname &&
    exam.student.name[0] === exam.student.name[0].toUpperCase() &&
    exam.student.surname[0] === exam.student.surname[0].toUpperCase()
  ) {
    nameValid = true;
  } else {
    nameValid = false;
    alert(
      "Both name and surname should be provided and both should start with capitals."
    );
  }

  // A grade should be valid numerical value from 1 to 10.
  if (exam.grade > 0 && exam.grade <= 10) {
    gradeValid = true;
  } else {
    gradeValid = false;
    alert("A grade should be valid numerical value from 1 to 10.");
  }

  if (nameValid && gradeValid) return true;
  else return false;
};


var displayExam = function (exam, grade) {
    var html = `
      <div class="exams_row">
        <p class="exams_name">${exam.getExamInfo()}</p>
        <p class="exams_grade">${exam.grade}</p>
      </div>
    `;
  
    document
      .querySelector(`.exams_section--${grade}`)
      .insertAdjacentHTML("beforeend", html);
  };


  var updateStats = function (exam, app) {
    app.students.total++;
    document.querySelector(".total_statistics span").textContent =
      app.students.total;
  
    if (exam.hasPassed()) {
      app.students.passed++;
      document.querySelector(`.passed_statistics .statistics_num`).textContent =
        app.students.passed;
      document.querySelector(
        ".failed_statistics .statistics_perc"
      ).textContent = `${app.calcFailedPerc()}%`;
    } else {
      app.students.failed++;
      document.querySelector(`.failed_statistics .statistics_num`).textContent =
        app.students.failed;
      document.querySelector(
        ".failed_statistics .statistics_perc"
      ).textContent = `${app.calcFailedPerc()}%`;
    }
  };
  