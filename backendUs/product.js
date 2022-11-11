const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productoSchema = new Schema (

    {
        "_id": String,
        "nombre": String,
        "precio" : Number ,
        "stock": Number
    }
);

const product = mongoose.model("producto", productoSchema);

module.exports = product;