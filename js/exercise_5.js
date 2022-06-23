/*
- Un orograma que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, el residuo de la division es CERO
*/
'use strict'

while(true){
    var num= parseInt(prompt("Insert number"))
    if(num%1==0){
        break
    }
}

for (var i=1; i<=num; i++){
    if(num%i==0){
        document.write(i+"<br>")
    }
}