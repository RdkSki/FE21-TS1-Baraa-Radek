"use strict";
let numbers = [];
for (let i = 1; i < 11; i++) {
    numbers.push(i);
}
function multi() {
    for (let k = 1; k <= numbers.length; k++) {
        for (let x of numbers) {
            document.getElementById('res').innerHTML += ("<center style='color:red;'>" + k + " x " + x + " = " + k * x + " <br><br> </center>");
        }
    }
}
(multi());
