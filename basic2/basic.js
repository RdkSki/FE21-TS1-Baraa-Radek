"use strict";
/* let fullName :Array<{
    first:string,
    last: string
}> =[
{
    first:"Baraa",
    last: "chiban"
}];

fullName.forEach(element => {
    for(let i=0;i<10;i++){
    (document.getElementById('name') as HTMLElement).innerHTML+=
    
    element.first + '<br>'
    
    }
}); */
// basic 3
let fullName = [
    {
        first: "Baraa",
        last: "chiban"
    }
];
setTimeout(function () {
    fullName.forEach(element => {
        for (let i = 0; i < 10; i++) {
            document.getElementById('name').innerHTML +=
                element.last + '<br>';
        }
    });
}, 5000);
