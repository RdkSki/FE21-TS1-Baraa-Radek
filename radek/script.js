"use strict";
<<<<<<< HEAD
=======
//basic3
let myArray = ["Fido", "Fluffy", "Fiona"];
for (let x in myArray) {
    console.log(x);
}
;
for (let val of myArray) {
    console.log(val);
}
;
for (let [x, val] of Object.entries(myArray)) {
    console.log(x, val);
}
;
//solution 1 basic2:
// let fullName :Array<{
//     first: string,
//     last: string
// }>=[{
//  first:"Radek",
//  last:"Slowinski"
//    },{
//     first:"Radek",
//     last:"Slowinski"
//       },{
//         first:"Radek",
//         last:"Slowinski"
//           }];
//for solution 1, add 5-10 array entries
// fullName.forEach(element =>{
//     (document.getElementById("xxx") as HTMLElement).innerHTML+= ` ${element.first} ${element.last} <br>`;
// });
//solution 2 basic2:
// setTimeout(function(){
//     fullName.forEach(element =>{
//     for(let i=0; i<11; i++){
//     (document.getElementById("xxx") as HTMLElement).innerHTML+= ` ${element.first} ${element.last} <br>`;
// }
// });
// },5000);
//(document.getElementById("xxx") as HTMLElement).innerHTML=name;
// let numbers :number[]=[];
// for(let i=1;i<11;i++){
//     numbers.push(i);    
// }
// function multi(){
//     for (let k :number=1;k<=numbers.length;k++){
//         for(let x  of numbers){
//         (document.getElementById("xxx") as HTMLElement).innerHTML+=( "<center style='color:red;'>" +  k +" x "+ x +" = "+ k*x+" <br><br> </center>" )      }
//     }
// }
// above the correct solution
// (multi());
>>>>>>> a472164a72989df8f8741800f686a227be9b4321
// const array = [1,2,3,4,5,6,7,8,9,10];
// for (let i=1; i<array.length, i++){
// for (let val of Object.entries(array)) {
//   let y= i * [val];
//    console.log(y);
// }
// }
// // 20
// 30
// for (let k = 0; k < myArray.length; k++) {
//    function multiply(){
//   let i=1;i<11;i++
//     let y = myArray[k] * i;
//     document.getElementById("xxx").innerHTML=""
// }
// }
// function multiply(){
//   for(i=1;i<11;i++){
//     let y = val.myArray[0] * i;
//     console.log(y);
// }
//   }
