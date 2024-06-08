import express from 'express'
import mongoose from 'mongoose'
const  port =3000;
const app = express()
let con = await mongoose.connect("mongodb://localhost:27017/company")
import {employees} from './models/employees.js'

app.use(express.json())
app.get('/', (req,res)=>{
    res.sendFile('/home/glxalokesh/Documents/vs code/web devlopement sigma/Sigma-Web-development-/video97-exercise 16/index.html')
})
function randSalaryGen(){
    let num = Math.floor(Math.random()*(450000-150000)+150000)
    return num;
}
function randnumgen(){
    let num = Math.floor(Math.random()*(3-1)+1)
    return num;
    
}
app.post('/submit', async(req, res) => {
    const count = await employees.countDocuments()
    if(count>0){
        await employees.deleteMany({});
        console.log("all deleted");
        
    }
    else{
        console.log("collection is already empty");
        
    }
    
    for(let i =1;i<=10;i++){
    let salary = randSalaryGen()
    let namelist = ["name1","name2","name3"]
    let name =  namelist[randnumgen()]
    let langlist = ["Python", "Javascript","c++"]
    let lang = langlist[randnumgen()]
    let citylist = ["Krishnagar","Barrackpore", "Taherpur"]
    let city = citylist[randnumgen()]
    let manager = (randnumgen()>=2)?false:true;
    const emp =  new employees({
            name: name,
            salary: salary,
            language: lang,
            city: city,
            isManager: manager
        })
    await emp.save();
}
    res.json('Hello World')
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
    
})