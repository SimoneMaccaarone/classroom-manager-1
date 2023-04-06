///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

const student1 = new Student('Simone', 'Maccarone');
const student2 = new Student('Luis Alberto', 'Castro');
const student3 = new Student('Davide', 'Consigliere');
const student4 = new Student('Francesco', 'Badile');

const classroom1 = new ClassRoom([student1, student2, student3, student4]);


function displayClassroom(array) {
    document.getElementById('student-list').innerHTML = '';


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);

        const studentList = document.createElement('student-list');
        const newLi = document.createTextNode(li);
        const studentLi = document.createTextNode(element);
        const removeButton = document.createElement('button');
        const buttonText = document.createTextNode('remove');

        removeButton.appendChild(buttonText);
        removeButton.addEventListener('click', (event) => removeStudent(element));

        newLi.appendChild(studentLi);
        newLi.appendChild(removeButton);
        studentList.appendChild(newLi);
    }

    function shuffleTheClassroom() {

    }

    function addStudentToClassroom() {

    }

}

