let num1 = 5;
let num2 = 8;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' ' + 'é o maior número');
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' ' + 'é o maior número');
} else if (num3 > num1 && num3 > num2) {
    console.log(num3 + ' ' + 'é o maior número');
} else {
    console.log('Ih, todos os números são iguais!');
};