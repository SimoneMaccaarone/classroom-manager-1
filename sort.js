// SPIEGAZIONE DEL METODO SORT
// SORTING

// questi sort li ordina in modo numerico crestente, alfabetico, e di nuovo alfabetico perche trasforma tutto in stringhe

const numbers = [1, 4, 2, 0, 234, 12];

numbers.sort(compareNumbersDescending)
console.log(numbers);  // Lo standerd sort li ordina in modo "crescente"


function compareNumbersAscending(number1, number2) {
    if (number1 > number2) {
        return 1;
    } else if (number1 < number2) {
        return -1;
    } else {
        return 0;
    }
}

function compareNumbersDescending(number1, number2) {
    if (number1 > number2) {
        return -1;
    } else if (number1 < number2) {
        return 1;
    } else {
        return 0;
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const string = ['pollo', 'carta', 'alto', 'paperino', '100pippe']

string.sort(compareStrings)
console.log(string)     // sort li ordina in ordine alfabetico (a,ab,b,c,d)

function compareStrings(string1, string2) {      //locale
    return string1.localeCompare(string2) * -1; // descendet

}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const booleans= [ false,true,false,true, true, false, false]

booleans.sort()
console.log(booleans)
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const mix = [1, 4, 2, 0, 234, 12,'pollo','carta','alto', 'paperino','100pippe', false,true,false,true, true, false, false]

mix.sort()
console.log(mix)
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
