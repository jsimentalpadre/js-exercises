/*
- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/
'use strict'

var num= 0
var sum=0
var counter=0

while(true){
    num= parseFloat(prompt("Insert number"))
    if (num>=0){
        sum+= num
        counter++
    } else {
        break
    }
}
var media= sum/counter
document.write("The final sum is : "+sum+"<br>The average of "+counter+" numbers is: "+media)