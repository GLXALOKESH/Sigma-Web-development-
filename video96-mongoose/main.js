
import express from 'express';
import mongoose from 'mongoose'
const app = express();
const port = 3000;
import  { info  }  from './models/details.js'
let con = await mongoose.connect('mongodb://localhost:27017/sigma-web-dev') 
app.get('/', (req, res) => {
    res.send("Hello World");
    const inf = new info({
        name:"alokesh",
        email:"alokeshmaitra9@gmail.com",
        number: 10
    })
    inf.save();
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
