import React, {useState} from "react";
import "../styles/styleCliente.css";
import Inicio from "./inicio";
import imag1 from "../images/image1.jpg";
import imag2 from "../images/image2.jpg";
import imag3 from "../images/image3.jpg";




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
    
    
        <div className="producto">
             <p>  <img  className="imagenes"  src= {imag1} alt="" ></img><br/>
             <b>Audífonos In-Ear Inalámbricos  </b><br/>
             $249900<br/>
             Stock : 4 <br/>
             <div className="button">
        <button className="btn"> Comprar </button>
        </div></p>
        </div>
    
    <div className="producto">
    <p>  <img  className="imagenes"  src= {imag2} alt="" ></img> <br/>
    <b>Celular</b> <br/>
     $1387900<br/>
    Stock : 4 <br/>
    <div className="button">
        <button className="btn"> Comprar </button>
    </div> </p>
    </div>
    
    <div className="producto">
    <p> <img  className="imagenes"  src= {imag3} alt="" ></img> <br/>
    
    <b>Microfono Inalámbrico</b>  <br/>
     $378900<br/>
    Stock :13 <br/>
    <div className="button">
        <button className="btn"> Comprar </button>

    </div> </p>
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