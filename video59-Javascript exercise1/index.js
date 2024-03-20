//faulty calculator
/*

10% of time

+ == -
* == +
- == /
/ == ** 


*/



let random = Math.random();
let num1 = prompt("Enter your first number: ")
let func = prompt("Enter the operation: ")
let num2 = prompt("Enter your second number: ")

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
