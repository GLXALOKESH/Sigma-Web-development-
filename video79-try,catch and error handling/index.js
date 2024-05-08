let input = prompt("enter a number")
if(input === null){
    throw SyntaxError("invalid input")
}
else if(parseInt(input)%2 == 0){
    throw Error("this is a even number try a odd number");
}

try{
    console.log(unknown)
}catch(error){
    console.log("there was an error");
    
}
finally{
    console.log("you reached at the end");
    
}