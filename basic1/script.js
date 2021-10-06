"use strict";
let numbers = [];
for (let i = 1; i < 11; i++) {
    numbers.push(i);
}
//console.log(numbers); 
function multi() {
    for (let k = 1; k <= numbers.length; k++) {
        for (let x of numbers) {
            /* (document.getElementById('res') as HTMLElement).innerHTML+=( "<center style='color:red;'>" +  k +" x "+ x +" = "+ k*x+" <br><br> </center>" ) */
            document.getElementById('res').innerHTML += (`<center style='color:red; font-size:2rem  ;'><b>   ${k}  x  ${x}  =  ${k * x} </b> <br><br> </center>`);
        }
    }
}
(multi());
