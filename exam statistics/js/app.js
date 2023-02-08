"use strict";

class App {
  constructor() {
    this.students = {
      total: 0,
      passed: 0,
      failed: 0,
    };
    document
      .querySelector(".form_submit")
      .addEventListener("click", this.submitForm);
  }

  calcFailedPerc() {
    var perc = Math.trunc((this.students.failed / this.students.total) * 100);

    return perc;
  }

  submitForm(e) {
    e.preventDefault();

    var exam = collectData();
    var isInputValid = validateData(exam);

    if (isInputValid) {
      var gradeDescription = exam.hasPassed() ? "passed" : "failed";
      displayExam(exam, gradeDescription);
      updateStats(exam, app);
    }
  }
}

var app = new App();