require('dotenv').config()
const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/login', (req, res) => {
    res.send('<h1>You have on login page</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})