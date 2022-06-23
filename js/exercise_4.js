/*
- Mostrar todos los numeros IMPARES que estén entre dos numeros introducidos por el usuario
*/
'use strict'

while(true){
    var init= parseInt(prompt("Insert intital number"))
    var final= parseInt(prompt("Insert final number"))
    if(init%1==0 && final%1==0 && init<=final){
        break
    }
}

for(init; init<=final; init++){
    if (init%2!=0){
        document.write(init+"<br>")
    }
}
