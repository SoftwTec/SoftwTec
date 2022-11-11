const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
const product = require ("./product") 

const uri = 'mongodb+srv://softw:mongo123@cluster0.nqbzhjh.mongodb.net/dataB?retryWrites=true&w=majority'

app.set ('port', process.env.PORT || 4000);
app.use(express.json());

mongoose.connect(uri)
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

app.get('/', (req, res) => {    
    res.send ("Hola")
    
});

app.post("/productos", async (req,res)=>{
    const body = req.body
    try {
    const productodb = new product(body)
    await productodb.save()
    res.send(productodb)
}catch (error) {
    console.log('error', error)
}
})
app.get("/productos", async (req,res)=>{
    try {
    const lista = await product.find ()
    res.send (lista);
}catch (error) {
    console.log('error', error)
}
})

app.get ('/:id', async (req,res)=>{
    const id = req.params.id;
    try {
        const unProducto = await product.findOne({ _id: id })
        res.send (unProducto);
    }catch (error) {
        console.log('error', error)
    }
})

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
}); 
 
