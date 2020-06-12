//imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//model schema
//se debe definir un esquema de la bd
//si las categorias no se quisieran dejar quemadas, se llamarian desde un mocks
const ProductSchema = Schema({
    name: String,
    price: { type: Number, default: 0},
    category: { type: String, enum: ['foods', 'technology', 'home'] },
    image: String
})

//export the model
module.exports = mongoose.model('Product', ProductSchema)
