const express = require('express');
const app = express();
const PORT = 8080;

const items = [
    { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
    { id: 2, nombre: 'FIFA 23 PS5', precio: 1000 },
    { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
    { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
    { id: 5, nombre: 'Skin Valorant', precio: 120 },
    { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
]

app.use(express.json())

app.get('/products', (req, res) => {
    res.send({ description: 'Products', items })
})

app.post('/products/create', (req, res) => {
    const newItem = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    // console.log(newItem);
    items.push(newItem);
    res.status(201).send(items)
})

app.put('/products/update/:id', (req, res) => {
    const found = items.some(item => item.id == req.params.id);
    if (found) {
        items.forEach(item => {
            if (item.id == req.params.id) {
                item.nombre = req.body.nombre;
                item.precio = req.body.precio
            }
        });
        res.send(items)
    } else {
        res.status(404).send(`item ${req.params.id} not found`)
    }
})

app.delete('/products/delete/:id', (req, res) => {
    const found = items.some(item => item.id == req.params.id);
    if (found) {
        res.status(200).send(items.filter(item => item.id != req.params.id))
    }
    else {
        res.status(404).send(`Id ${req.params.id} is nota an product`)
    }
})

app.get('/products/filter/:precio', (req, res) => {
    const found = items.some(item => item.precio == req.params.precio);
    if (found) {
        res.status(200).send(items.filter(item => item.precio == req.params.precio))
    } else {
        res.status(404).send(`There's no products with price ${req.params.precio}`)
    }
})

app.get('/products/filter/50-250/', (req, res) => {
    const found = items.some(item => item.precio > 50 && item.precio < 250);
    if (found) {
        res.status(200).send(items.filter(item => item.precio > 50 && item.precio < 250))
    } else {
        res.status(404).send(`There's no products with price between 50 and 250`)
    }
})

app.get('/products/find/price/', (req, res) => {
    const found = items.some(item => item.precio == req.body.precio);
    if (found) {
        res.status(200).send(items.filter(item => item.precio == req.body.precio))
    } else {
        res.status(404).send(`There's no products with price ${req.body.precio}`)
    }
})
app.get('/products/find/name/', (req, res) => {
    const found = items.some(item => item.nombre == req.body.nombre);
    if (found) {
        res.status(200).send(items.filter(item => item.nombre == req.body.nombre))
    } else {
        res.status(404).send(`There's no products with price ${req.body.nombre}`)
    }
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})