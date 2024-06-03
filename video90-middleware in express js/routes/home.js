const express = require('express');
const router = express.Router();
const fs = require("fs");
const { get } = require('http');
const { isIPv4 } = require('net');
router.use((req,res,next)=>{
    fs.appendFileSync('home.txt', `${Date.now()} entered home ${req.ip}\n`)
    next()

})
router.get('/', (req,res) =>{
    res.send("This is home")
})

module.exports = router;
