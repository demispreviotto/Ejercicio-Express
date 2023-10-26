const express = require('express');
const app = express();
const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello Ej2!");
})
app.get('/product', (req, res) => {
    res.send("list of products");
})
app.post('/product', (req, res) => {
    res.send("create the product " + req.body.name);
})
app.post('/product', (req, res) => {
    res.send("update product " + req.body.name);
})
app.delete('/product', (req, res) => {
    res.send("delete product " + req.body.name);
})
app.get('/users', (req, res) => {
    res.send("list of users");
})
app.post('/users', (req, res) => {
    res.send('create new user' + res.body.name)
})
app.put('/users', (req, res) => {
    res.send('update user' + res.body.name)
})
app.delete('/users', (req, res) => {
    res.send(`delete user ${res.body.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})