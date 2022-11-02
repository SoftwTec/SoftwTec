import React, { useState } from "react";
import "../styles/styleAdministrador.css"
import Inicio from "./inicio";
import Modificar from "./crearProductos";
import productos from '../productos.json';

function Administrador() {

  function volver() {
    setBarra(barra = <Inicio />)
    setListarProductos(listarProductos = " ")
    setCrearProductos(crearProductos = "")
  }

  function listar() {
    setListarProductos(listarProductos = listaP)
    setCrearProductos(crearProductos = "")

  }
  function crear() {
    setCrearProductos(crearProductos = <Modificar />)
    setListarProductos(listarProductos = "")
  }

  let init = <div className="blockAdmin">
    <div className="container">
      <div className="blockClientes">
        <button onClick={listar} className="buttonAdmin"> Listar Productos </button>
        <button onClick={crear} className="buttonAdmin">Modificar Productos </button>
        <button className="buttonAdmin"> Lista de ventas </button>
        <button onClick={volver} className="buttonAdmin">Volver</button>
      </div>
    </div>
  </div>


  let listaP = <div>
    <h1>Listando los productos</h1>

    <div className="productos">

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto, index) => (
          <div className="col-md-4 col-lg-3 mb-2" key={index}>
            <div className="card">
              <img className="card-img-top img-card altoH" alt="sol de espuma" src={require("../images/" + producto.imagen)} />
              <div className="card-body">
                <p className="card-text"><b>{producto.nombre}</b><br />
                  ${producto.precio}<br />
                  Stock: {producto.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="container">
    </div>

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">© 2022 Mintic</span>
        </div>
      </footer>
    </div>
  </div>


  let [barra, setBarra] = useState(init)
  let [listarProductos, setListarProductos] = useState(listaP)
  let [crearProductos, setCrearProductos] = useState()

  return (
    <div>
      {barra}
      {listarProductos}
      {crearProductos}
    </div>
  )
}

export default Administrador