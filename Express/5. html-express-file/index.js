const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templete/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templete/about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'templete/contact.html'))
})

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'templete/services.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})