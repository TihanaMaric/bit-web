"use strict"

class Exam {
    constructor(subject,student,grade){
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getExamInfo(){
        var exam = `${this.subject.name} - ${this.student.name} ${this.student.surname}`;
         return exam;
    }

    hasPassed(){
        if(this.grade > 5) return true;
        else return false;   
    }
}