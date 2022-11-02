import React, {useState} from "react";
import "../styles/styleCliente.css";
import Inicio from "./inicio";
import productos from '../productos.json';


function Cliente (){
    const volver = () => {
        setBarra(barra = <Inicio/>)
        setInicio(inicio="")
        setVisualizar (visualizar=" ")

    }
    function btninit(){
        setInicio(inicio = image)
        setVisualizar (visualizar=" ")
    }
    function ver () {
        setInicio (inicio=" ")
        setVisualizar (visualizar = lista)

    }
    
    let init =  <div>
    <div className="blockClientes">
    <button onClick={btninit} className="buttonClientes"> Inicio </button>
    <button onClick={ver} className="buttonClientes">Lista Productos </button>
    <button className="buttonClientes"> Carrito </button>
    <button onClick={volver} className="buttonClientes">Volver</button>
    </div>
    
    <div>
        <h1> SoftwTec </h1>
    </div>
    </div>
    let image = <img className="imagenes" src="https://th.bing.com/th/id/OIP.XDNV8BQJ6ZPVinmxj3Tx5gHaHa?pid=ImgDet" alt="Logo"></img>
    let lista = <div className="productos">
    

    <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto, index) => (  
          <div className="col-md-4 col-lg-3 mb-2" key={index}>
            <div className="card">
              <img className="card-img-top img-card altoH" alt="sol de espuma" src={require("../images/"+producto.imagen)} />
              <div className="card-body">
                <p className="card-text"><b>{producto.nombre}</b><br />
                  ${producto.precio}<br />
                  Stock: {producto.stock}<br/>
                  <div className="button">
                      <button className="btn"> Comprar </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}  
      </div>
    </div>
    
    let [barra, setBarra] =useState(init)
    let [inicio, setInicio] = useState (image)
    let [visualizar, setVisualizar] = useState (lista)
    
    return (

        <div>
         {barra}
         {inicio}
         {visualizar}

        </div>
    )

}

export default Cliente