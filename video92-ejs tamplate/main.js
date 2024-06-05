const express = require('express')
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.get('/', (req,res)=>{
    sitename = 'alokesh'
    res.render('index',{sitename})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})