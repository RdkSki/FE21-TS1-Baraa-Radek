let numbers :number[]=[];
for(let i=1;i<11;i++){
    numbers.push(i);    
}


function multi(){
    for (let k :number=1;k<=numbers.length;k++){
        for(let x  of numbers){
        
<<<<<<< HEAD
            (document.getElementById('res') as HTMLElement).innerHTML+=( "<center style='color:red;'>" +  k +" x "+ x +" = "+ k*x+" <br><br> </center>" )
        }
=======
        (document.getElementById("res") as HTMLElement).innerHTML+=( "<center style='color:red;'>" +  k +" x "+ x +" = "+ k*x+" <br><br> </center>" )      }
>>>>>>> 1f564d92395ee79095b36820910e861a70f83792
    }
}

(multi());







