/*
- Hacer un programa que nos diga si es par o impar
    1- Ventana prompt
    2- Si no es valido que nos pida el numero de nuevo
*/

while(true){
    var num= parseInt(prompt("Insert number"))
    if(num%1==0){
        break
    }
}

if(num%2==0){
    document.write("The number "+num+" is even")
} else{
    document.write("The number "+num+" is odd")
}