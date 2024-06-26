const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/:slug', (req, res) => {
    console.log(req.params,req.query);
    
    res.send(`Hello ${req.params.slug}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})