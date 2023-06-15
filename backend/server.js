const express = require('express')
var cors = require('cors')

const data = require('./data.json')
const app = express()

app.use(cors())

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/posts', function (req, res) {
    res.send({data : data})
})



app.get('/about', function (req, res) {
res.send("Kaushik Kumar")
})



app.get('/home', function (req, res) {
res.send("Home")
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})



// http://localhost:3000/sum?numone=5&numtwo=10
