
const express = require('express')
const app = express();



app.get('/', (req,res) =>{
    res.send(' Hello Node js')

})


app.listen(3800,() => console.log('listent this port 3800'))