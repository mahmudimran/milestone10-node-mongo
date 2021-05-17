
const express = require('express')
const app = express();



app.get('/', (req,res) =>{
    const product ={
        name: 'LED TV',
        price : 200,
    }
    res.send(product)

})

app.get('/product/banana', (req,res) =>{
    res.send({furit: 'bannaa', quantity: 3000, price: 2000})
})

app.listen(3800,() => console.log('listent this port 3800'))