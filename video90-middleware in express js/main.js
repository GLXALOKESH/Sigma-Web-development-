const express = require("express")
const app = express()
const port = 3000
const home = require('./routes/home',{root: __dirname})
const fs = require('fs')
app.use(( req, res, next) =>{
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)

    next()
})
app.use('/home', home)

app.get('/',(req,res)=>{
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})