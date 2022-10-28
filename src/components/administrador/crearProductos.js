import React, {useState} from "react";
import "../crearProductos.css";


function App(){

    const [nombre, setNombre] = useState("Alex Chávez T");

    const crearProducto = (e) => {
        const value = e.target.value
        console.log(value);
        setNombre(value);
    };

    const enviar = () => {
        console.log("Se ha creado el siguiente producto: ", nombre)
    }

    
    return(
        <div className="Mi_Formulario_Contenedor">
            <div className="Mi_Formulario_Header">
                <h1 className="Mi_Formulario_Título">Formulario de Entrada de Datos</h1>
                </div>
                    <div className="Mi_Formulario_Body">
                        <div className="Mi_Formulario_Form">
                            <label className="Label">Nombre:</label>
                            <input className="Mi_Formulario_Input" id="nombre" name="nombre" value={nombre} onChange={crearProducto}></input>
                            <button onClick={enviar} className = "Mi Formulario Button">Enviar</button>
                        </div>
                    </div>   
                <div className="Mi Formulario Footer">
                    <div className="Mi Formulario Group">
                    <span className="Mi Formulario Label">
                        Este es mi Primer Formulario
                    </span>
                </div>
            </div>         
        </div>
    )
}

export default App