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
const student5 = new Student('Vlad', 'Ukraine');
const student6 = new Student('Valentina', 'Cherubini');
const student7 = new Student('Jing', 'Wang');
const student8 = new Student('Pietro', 'Viglino');
const student9 = new Student('Daniele', 'Puggioni');
const student10 = new Student('Davide', 'Cresta');



const classroom1 = new ClassRoom([student1, student2, student3, student4,student5,student6,student7,student8,student9,student10]);


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

displayClassroom(classroom1)

function displayClassroom(array) {
    document.getElementById('student-list').innerHTML = '';  // ogni volta che uso questa funzione viene pulita

    const classRoomStudent = array.students

    for (let i = 0; i < classRoomStudent.length; i++) {
        const element = classRoomStudent[i];        // element = student   | element equivale a student RICORDATELOOOOO!!!!!
        console.log(element);

        // creazione della lista degli studenti
        const studentList = document.getElementById('student-list'); // scegliere dove fare la lista
        const newLi = document.createElement('li'); // scegliere il tag che voglio usare
        const studentLi = document.createTextNode((element.name) + ' ' + (element.surname));   // scrivere cosa voglio mettere ( il testo)

        //----- metodo alternativo per aggiungere un tag HTML-------
        //studentList-innerHTML += `<li class "list-element">${element.name} ${element.surname}<button> cancella</button>`

        // aggiunta del pulsante rimuove
        const removeButton = document.createElement('button');
        // const buttonText = document.createTextNode('BIDONAAAAAA');
        removeButton.classList.add('remove-btn')
        const removeImg = document.createElement('img')
        removeImg.classList.add('remove-img')
        removeImg.src = './assets/cestinooo.jpg'

        removeButton.appendChild(removeImg);
        
        removeButton.addEventListener('click', (event) => classroom1.removeStudent(element));

        newLi.appendChild(studentLi);
        newLi.appendChild(removeButton);
        studentList.appendChild(newLi);
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom(classroom1);

}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function addStudentToClassroom() {
    const inputName = document.getElementById('student-name');
    const inputSurname = document.getElementById('student-surname');

    // if => aggiungi solo se ce un nome e un cognome
    if (inputName.value !== '' && inputSurname.value !== '') {
        const newStudent = new Student(inputName.value, inputSurname.value);
        classroom1.addStudent(newStudent);
        displayClassroom(classroom1);

        inputName.value = '';       // pulisci l' input
        inputSurname.value = '';    // pulisci l' input
    }
}



