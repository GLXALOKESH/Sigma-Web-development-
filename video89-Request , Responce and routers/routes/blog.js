const express  = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("inside blog route")
})

router.get("/blogpost",(req,res)=>{
    res.send("inside blog route inside blogpost")
})
module.exports = router;