const express = require('express');
const app = express();
const path = require('path')
const PORT = 8080

app.use(express.json())//parse the body

// app.get('/', (req, res) => {
//     res.send("Hello The Bridge");
// })
app.get('/saludar', (req, res) => {
    res.send("Hello");
})
app.get('/myName/:name', (req, res) => {
    res.send("My name is " + req.params.name);
})
app.get('/myNameQuery', (req, res) => {
    res.send("My name is " + req.query.name);
})

app.post('/myName', (req, res) => {
    res.send("My name is " + req.body.name);
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})