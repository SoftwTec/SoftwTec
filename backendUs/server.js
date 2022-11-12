const express = require("express");
const mongoose = require("mongoose");
const app = express();
const product = require("./product")

const uri = 'mongodb+srv://softw:mongo123@cluster0.nqbzhjh.mongodb.net/dataB?retryWrites=true&w=majority'

app.set('port', process.env.PORT || 4000);
app.use(express.json());

mongoose.connect(uri)
    .then(() => console.log('conectado a mongodb'))
    .catch(e => console.log('error de conexión', e))


// ruta principal
app.get('/', (req, res) => {
    res.send("Bienvenido al backend")
});

// crear productos
app.post("/productos", async (req, res) => {
    const body = req.body
    try {
        const productodb = new product(body)
        await productodb.save()
        res.send(productodb)
    } catch (error) {
        console.log('error', error)
    }
})

// modificar producto
app.post("/productos/:productoId", async (req, res) => {
    let id = req.params.productoId;
    let producto = await product.findOne({ _id: id });
    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;
    producto.stock = req.body.stock;
    producto.save();
    res.json(producto);
})

// modificar unidades
app.get("/productos/:productoId/:nuevoStock", async (req, res) => {
    let id = req.params.productoId;
    let stock = req.params.nuevoStock;
    let producto = await product.findOne({ _id: id });
    producto.stock = stock;
    producto.save();
    res.json(producto);
})

// Consultar todos los productos
app.get("/productos", async (req, res) => {
    try {
        const lista = await product.find()
        res.send(lista);
    } catch (error) {
        console.log('error', error)
    }
})

// listar solo los disponibles
app.get("/disponibles", async (req, res) => {
    try {
        const lista = await product.find({ stock: { $gt: 0 } })
        res.send(lista);
    } catch (error) {
        console.log('error', error)
    }
})

//Consultar por id
app.get('/productos/:id', async (req, res) => {
    let id = req.params._id;
    try {
        const unProducto = await product.findOne({ _id: id });
        res.send(unProducto);
    } catch (error) {
        console.log('error', error)
    }
})

//Eliminar producto
app.delete('/delete', async (req, res) => {
    const deleteProduct = req.params.id;
    try {
        const deleteProducto = await product.findByIdAndDelete (deleteProduct)

        if(!deleteProducto){
            res.send("Not found");
        }
        else {
            res.send("product delete")
        }
        
    } catch (error) {
        console.log('error', error)
    }
})

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

