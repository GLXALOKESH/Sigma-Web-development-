// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf
// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


const fs = require('fs')
const path = require('path');


let dirPath = '/home/glxalokesh/Documents/vs code/web devlopement sigma/Sigma-Web-development-/video91-exercise 15 clear the cutter'

fs.readdirSync(dirPath).forEach(file => {
    // console.log(file);
    ext = path.extname(file);
    if(ext =='' || ext == '.js' || ext == '.json'){
        return
    }
    ext = ext.slice(1)
    if(!fs.existsSync(path.join(dirPath, ext))){
        fs.mkdirSync(path.join(dirPath,ext))
    }
    fs.renameSync(path.join(dirPath,file),path.join(dirPath,ext,file))
    // console.log(ext);
    
  });

fs.readdirSync(dirPath).forEach(file => {
    console.log(file);
    
})
  