const express = require('express');
const app = express()
const port = 3000

//to send the data in from the postman we have to use this 2 line quarry
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World! Get')
})

app.post('/', (req, res) => {
    console.log(req.body.name);
    res.send('Hello World! Post')
})

app.put('/', (req, res) => {
    res.send('Hello World! Put')
})

app.delete('/', (req, res) => {
    res.send('Hello World! Delete')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})