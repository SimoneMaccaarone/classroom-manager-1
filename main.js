///BONUS
// 1) rimozione dello studente FATTOOOO
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

const student1 = new Student('Simone', 'Maccarone');
const student2 = new Student('Luis Alberto', 'Castro');
const student3 = new Student('Davide', 'Consigliere');
const student4 = new Student('Francesco', 'Badile');


const classroom1 = new ClassRoom([student1, student2, student3, student4]);


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

displayClassroom(classroom1)

function displayClassroom(array) {
    document.getElementById('student-list').innerHTML = '';

    const classRoomStudent = array.students

    for (let i = 0; i < classRoomStudent.length; i++) {
        const element = classRoomStudent[i];
        console.log(element);

        const studentList = document.getElementById('student-list');
        const newLi = document.createElement('li');
        const studentLi = document.createTextNode((element.name) + ' ' + (element.surname));
        const removeButton = document.createElement('button');
        const buttonText = document.createTextNode('remove');

        removeButton.appendChild(buttonText);
        removeButton.addEventListener('click', (event) => classroom1.removeStudent(element));

        newLi.appendChild(studentLi);
        newLi.appendChild(removeButton);
        studentList.appendChild(newLi);
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function shuffleTheClassroom() {
    classroom1.shuffleStudents()
    displayClassroom(classroom1)

    
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function addStudentToClassroom() {
    const inputName = document.getElementById('student-name')
    const inputSurname = document.getElementById('student-surname')
    if (inputName.value !== '' && inputSurname.value !== '') {
        const newStudent = new Student(inputName.value, inputSurname.value)
        classroom1.addStudent(newStudent)
        displayClassroom(classroom1)
        inputName.value = ''
        inputSurname.value = ''
    }
}



