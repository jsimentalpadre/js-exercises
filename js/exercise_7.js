/*
- Hacer un programa con la tabla de multiplicar
    1- Para el numero introducido (ventana prompt)
    2- PLUS: Para todas las tablas de multiplicar del 1 hasta el numero introducido
*/
'use strict'

while(true){
    var num= parseInt(prompt("Insert number"))
    if(num%1==0){
        break
    }
}

let multi=0
document.write("<table style='width:100%; border:1px solid black;'><tr>")
for(var i=1; i<=10; i++){
    multi= i*num
    document.write("<td style='border:1px solid black;'>"+multi+"</td>")
}
document.write("</tr></table><br><br>")


for(var i=1; i<num; i++){
    document.write("<table style='width:100%; border:1px solid black;'><tr>")
    for(var j=1; j<=10; j++){
        multi= i*j
        document.write("<td style='border:1px solid black;'>"+multi+"</td>")
    }
    document.write("</tr></table><br>")
}