import './App.css';
import ListarProductos from './components/administrador/listarProductos';
import CrearProductos from './components/administrador/crearProductos';

function App() {
  return (
    <div className="App">
      <header className="p-3 text-bg-dark mb-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-white">Listar Productos</a></li>
              <li><a href="/" className="nav-link px-2 text-white">Modificar Productos</a></li>
              <li><a href="/" className="nav-link px-2 text-white">Listar Ventas</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container">
        <ListarProductos /> 
        <CrearProductos /> 
      </div>

      <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                  <span className="mb-3 mb-md-0 text-muted">© 2022 Mintic</span>
              </div>
          </footer>
      </div>
    </div>
  );
}

export default App;
