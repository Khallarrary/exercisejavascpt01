let numberOne = Number(prompt("Insira o primeiro numero"));

let numberTwo = Number(prompt("Insira o segundo numero"));

console.log(numberOne, numberTwo)

let sum = numberOne + numberTwo;
let oddPair = sum % 2;
let subtraction = numberOne - numberTwo;
let multi = numberOne * numberTwo;
let divi = numberOne / numberTwo;
let restDivi = numberOne % numberTwo;

divi = divi.toFixed(2)

if (numberOne == numberTwo) {
    alert("Opa, temos dois numeros iguais! ")
}

else {

}

alert("A soma deles é " + sum);

if (oddPair == 0) {
    alert("e a soma desses numeros resultou em um numero par")
}

else {
    alert("e a soma desses numeros resultou em um numero ímpar")
}

alert("A subtração deles é " + subtraction);

alert("A multiplicação deles é " + multi);

alert("A divisão deles é " + divi);

alert("E o resto da divição deles é " + restDivi);