import fs from "fs"

// console.log(fs)
console.log("started");
// fs.writeFileSync("file1.txt", "This is file one")
fs.writeFile("file1.txt", "this is file one",()=>{
    console.log("done");
    fs.readFile("file1.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
})
fs.appendFile("file1.txt","\t this is appended\t",(error,data)=>{
    console.log(error,data);
    
})
console.log("finished");


