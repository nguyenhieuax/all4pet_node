const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello dit me may!'))

app.post('/login', (req, res) => res.send({
    status: 'success',
    token: '123123123'
}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))