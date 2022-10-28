import productos from '../../productos.json';

function ListarProductos() {

  return (
    <div>
      <h1>Listando los productos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto, index) => (  
          <div className="col-md-4 col-lg-3 mb-2" key={index}>
            <div className="card">
              <img className="card-img-top img-card" alt="sol de espuma" src="https://th.bing.com/th/id/OIP.XDNV8BQJ6ZPVinmxj3Tx5gHaHa?pid=ImgDet" />
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
  );
}

export default ListarProductos;
