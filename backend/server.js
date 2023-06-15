const express = require('express')
var cors = require('cors')
const data = require('./data.json')
const app = express()

app.use(cors())


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/posts', function (req, res) {
    res.send({data : data})
})


app.get('/sum', function (req, res) {
  let one = req.query.numone;
  let two = req.query.numtwo;
  res.send(one+two)
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
