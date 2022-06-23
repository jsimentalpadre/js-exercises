/*
- Programa que pida dos numeros y que nos diga cual es mayor, cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, los vuelva a pedir
*/
'use strict'

do{
    var num1= parseFloat(prompt("Insert number 1"))
    var num2= parseFloat(prompt("Insert number 2"))

} while(num1<=0 || num2<=0)

if(num1>=num2){
    if(num1==num2){
        document.write("Number 1: <strong>"+num1+"</strong> is equal to number 2: <strong>"+num2+"</strong>")
    } else{
        document.write("Number 1: <strong>"+num1+"</strong> is greater than number 2: <strong>"+num2+"</strong>")
    }
} else{
    document.write("Number 1: <strong>"+num1+"</strong> is lesser than number 2: <strong>"+num2+"</strong>")
}