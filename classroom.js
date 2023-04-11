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
        // spiegazione: lavoriamo sull array "students", mettiamo ".sort"
        this.students.sort(function () { return 0.5 - Math.random() });

        // un altro modo per fare questa funzione
        /* const tempArray= [];
        while(this.students.length > 0){

            const randomNumber = Math.random() * this.students.length:     // Math.Random genera un numero da 0 a 1. (es1: 0, es2:1, es3: 0.34) | this.students.length = 4 o x (persone della lista). quindi -> es: random number = 1*4= 
            const randomIndex = Math.floor(randomNumber);                 // Arrotondo perche non voglio un numero con la virgola
            const arrayOfDeleted = this.students.splice(randomIndex,1);  // Rimuovo un this.students con splice | .splice ( randomIndex = posizione casuale, 1= un elemento )

            const randomStudent = arrayOfDeleted[0];    // metti l elemento rimosso qua dentro

            tempArray.push(randomStudent);             // pusho ora l' array nuovo creato che ora ha gli this.students randomici

            console.log('students',this.students)       // console.log ordinato
            console.log('temp',tempArray)              // console.log random

        } */

    }
} 