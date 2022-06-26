/*
- Programar una Calculadora
    1- Que pida dos numeros por pantalla
    2- Si se captura un numero mal (algo no numerico), que lo vuelva a pedir
    3- El resultado de Sumar, Restar, Multiplicar y Dividir esas dos cifras
    4- Se debe mostrar en el cuerpo de la pagina, en una alerta y en la consola
*/
'use strict'

// Como se validaria la captura de algo no numerico , u otra forma de validarlo ??

while(true){
    var num1= parseFloat(prompt("Insert number 1"))
    var num2= parseFloat(prompt("Insert number 2"))
    if(num1%1==0 && num2%1==0){
        break
    }
}

var sum= num1+num2
var substraction= num1-num2
var multi=num1*num2
var div=num1/num2

document.write("Number 1: <strong>"+num1+"</strong>. Number 2: <strong>"+num2+"</strong><br>")
document.write("The sum is: "+sum+"<br>")
document.write("The substraction is: "+substraction+"<br>")
document.write("The multiplication is: "+multi+"<br>")
document.write("The division is: "+div)

console.log("Number 1: "+num1+". Number 2: "+num2)
console.log("The sum is: "+sum)
console.log("The substraction is: "+substraction)
console.log("The multiplication is: "+multi)
console.log("The division is: "+div)
