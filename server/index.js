const express = require('express')
const path = require('path')

const app = express()

// app.use()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get('/css', function (req, res){
    res.sendFile(path.join(__dirname, "../style.css"))
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Jump to hyperspace through ${port}`))