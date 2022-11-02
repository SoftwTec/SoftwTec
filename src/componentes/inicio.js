import React,{useState} from "react";
import "../styles/stylesInicio.css";
import Cliente from "./cliente";
import Administrador from "./administrador";

const Inicio = () => {
    let inits = <div>
    <h1> Página de Inicio </h1>
    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
    <button onClick={vistaAdmin} className="buttonAdministrador"> Administrador </button>

    </div>
    let [estado, SetEstado] = useState(inits)

    function vistaCliente (){
        SetEstado(estado = <Cliente/>)

    }
    function vistaAdmin (){
        SetEstado(estado = <Administrador/>)

    }
    return (
        <div>
            {estado}
        </div>
    )

}

export default Inicio