const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let no = 20
    let users = ["Sayan", "Saurav", "Shubhankar"];
    res.render('index', { no: no, users: users });
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})