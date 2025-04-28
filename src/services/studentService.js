const students = require('../db/students');

class StudentService {
    constructor() {
        this.students = students;
    }

    async findStudent(username, password) {
        return this.students.find(student => student.username === username && student.password === password);
    }
}

module.exports = StudentService;