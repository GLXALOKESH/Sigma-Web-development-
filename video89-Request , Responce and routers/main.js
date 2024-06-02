const express = require('express')

const app = express();
const port = 3000;
const blog = require('./routes/blog')
app.use(express.static("public"))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/blog',blog)
app.get('/:slug', (req, res) => {
    console.log(req.params, req.query);

    res.send(`Hello ${req.params.slug}`)
})
app.post('/', (req,res) =>{
    res.send("Hey this is a post request")    
    
})
app.get('/home/index', (req,res) =>{
    res.sendFile('tamplate/index.html', { root: __dirname });
})
app.get('/home/downloadfile',(req,res) =>{
    res.download('file.txt', { root: __dirname })
})
app.get('/home/redirect',(req,res) =>{
    res.redirect('https://www.google.com')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
