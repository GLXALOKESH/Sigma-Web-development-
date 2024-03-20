//faulty calculator
/*

10% of time

+ == -
* == +
- == /
/ == ** 


*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let random = Math.random();
rl.question('Input the first number: ', (num1) => {
    rl.question('Input your function (+, -, /, *): ', (func) => {
      rl.question('Input the second number: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

function funplus(a,b){
    return(a+b)
}
function funminus(a,b){
    return(a-b)
}
function fundivide(a,b){
    return(a/b)
}
function funmulti(a,b){
    return(a*b)
}
function funpower(a,b){
    return (a**b)
}
let out ;
if(random<0.1){
if(func == "+"){
    out=funplus(num1,num2)
    console.log("\n"+out)
}
else if(func == "-"){
    out=funminus(num1,num2)
    console.log("\n"+out)

}
else if (func == "/"){
    out=fundivide(num1,num2)
    console.log("\n"+out)

}
else if (func == "*"){
    out=funmulti(num1,num2)
    console.log("\n"+out)

}

}
else{
    if(func == "+"){
        out=funminus(num1,num2)
    console.log("\n"+out)

    }
    else if(func == "-"){
        out=fundivide(num1,num2)
    console.log("\n"+out)

    }
    else if (func == "/"){
        out=funpower(num1,num2)
    console.log("\n"+out)

    }
    else if (func == "*"){
        out=funplus(num1,num2)
    console.log("\n"+out)

    }   
}
rl.close();
});
});
});