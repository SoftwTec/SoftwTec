function ListarProductos() {
  return (
    <div>
      <h1>Listando los productos</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-md-4 col-lg-3 mb-2">
          <div className="card">
            <img className="card-img-top img-card" alt="sol de espuma" src="https://th.bing.com/th/id/OIP.XDNV8BQJ6ZPVinmxj3Tx5gHaHa?pid=ImgDet" />
            <div className="card-body">
              <p className="card-text"><b>Sol de espuma</b><br />
                $100<br />
                Stock: 15
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-3 mb-2">
          <div className="card">
            <img className="card-img-top img-card" alt="corazón juguete" src="https://th.bing.com/th/id/OIP.XDNV8BQJ6ZPVinmxj3Tx5gHaHa?pid=ImgDet" />
            <div className="card-body">
              <p className="card-text"><b>Corazón juguete</b><br />
                $35.0<br />
                Stock: 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListarProductos;
