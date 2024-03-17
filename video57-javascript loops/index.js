console.log("Loops in javascript");

for(let i=0; i<100; i++){
    console.log(i);

}

let obj ={
    name:"Alokesh",
    roll:5,
    class:"unknown",
    subjec:"Computer Science"
}

for (const key in obj){
    console.log(key)
}
for (const char of "Alokesh"){
    console.log(char)

}
let j =0;
while (j <10){
    console.log(j);
    j++;
}
let y =0;
do {
 console.log(y)
 y++
}while(y<20);