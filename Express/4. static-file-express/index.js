const express = require('express');
const app = express()
const port = 3000

//serving static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// below 3 parameter is their : q, name, location
// http://localhost:3000/search?q=HTPORN&name=sayan&location=india
app.get('/search', (req, res) => {
    let query = req.query.q
    let name = req.query.name
    let location = req.query.location
    res.send(`${name} search for ${query} from ${location}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})