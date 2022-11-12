const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productoSchema = new Schema (

    {
        "_id": Number,
        "nombre": String,
        "precio" : Number ,
        "stock": Number
    }, {versionKey:false}

);

const product = mongoose.model("producto", productoSchema);

module.exports = product;