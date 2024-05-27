import fs from "fs/promise"

let a = await fs.writeFile("file2.txt", "This is file 2",()=>{})
let b = await fs.readFile("file2.txt", (error,data)=>{
    console.log(error, data);
    
})