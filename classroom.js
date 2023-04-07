class ClassRoom {

    constructor(students = []) {
        this.students = students;
    }

    addStudent(student) {
        this.students.push(student);
    }


    removeStudent(student) {
        const studentIndex = this.students.indexOf(student);
        this.students.splice(studentIndex, 1);
        displayClassroom(classroom1);
    }

    shuffleStudents() {

        let shuffleStudents = this.students.sort(function () { return 0.5 - Math.random() });

    }

}