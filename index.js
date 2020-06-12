//npm init
//npm i express
//npm i body-parser
//node index.js
//npm i mongoose
//npm run dev
//next capturar mensajes de errores
//alt 96 //literal string

//requires
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//product, import the schema
const Product = require('./models/product')

//server
const app = express();
//toma el puerto por defecto o el q se especifica
const port = process.env.PORT || 9000

//se encarga de parsear la informacion en el formato que necesita node y express
app.use(bodyParser.urlencoded( {extended: false }))
app.use(bodyParser.json())

//routes (petitions)
//el lenguaje entiende q despues de los dos puntos habra un parametro
/*
app.get('/home/:name', (req, res) => {
    //res.send( { message: 'Welcome to API Rest' } )
    res.send( { message: `Welcome ${req.params.name} to API Rest`})
})
*/
//API Rest
//routes endspoints
app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
});

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    /*console.log(req.body)

    res.status(200).send( {message: "Product OK"} )
    res.status(404).send( {message: "Products does not exist"})*/

    //usar schema y registrar en la DB
    let product = new Product()

    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.image = req.body.image

    product.save( (err, productStored) => {
        if (err) res.status(500).send( {message: `save error: ${err}`} )

        res.status(200).send( {product: productStored} )
    }) 
})

app.put('/api/product/:productId', (req, res) =>{

})

app.delete('/api/product/:productId', (req, res) =>{

})

//server connect
//si se conecta a la BD sube el servidor
mongoose.connect('mongodb://localhost:27017/produtswcg', (err, res) => {
    if (err) throw err
    console.log('Database connection ok')

    const server = app.listen(port, () => {
        console.log(`Listening http://localhost:${ server.address().port }`)
    })
})

