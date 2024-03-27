//calculate factorial value 

let numbers = []
let itr = prompt("Enter the number you want to see the factorial: ")
for(let i=1; i<=itr ; i++){
    numbers[i]= i;
}
function mul(a,b){
return (a*b)
}
let fact= numbers.reduce(mul)
console.log(`factorial of ${itr} is ${fact}`)
