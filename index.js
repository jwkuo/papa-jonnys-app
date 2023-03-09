import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 3000

const pizzas = [
    {
        id: 1,
        name: 'Pepperoni',
        price: 7.99
    },
    {
        id: 2,
        name: 'Cheese',
        price: 6.99
    },
    {
        id: 3,
        name: 'Sausage',
        price: 7.99
    }
]

app.get('/', (req, res) => {
    return res.json("Welcome to Papa Jonny's")
})

app.get('/pizzas', (req, res) => {
    const data = {
        count: pizzas.length,
        data: pizzas
    }
    return res.json(data)
})

app.get('/orders', (req, res) => {
    const data = {
        data: []
    }
    return res.json(data)
})

app.post('/order/create', (req, res) => {
    const order = req.body.json()
    console.log(order)
    const data = {
        data: order
    }
    return res.json(data)
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})