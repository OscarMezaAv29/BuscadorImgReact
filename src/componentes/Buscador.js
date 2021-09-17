import React, { Component } from "react";

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input y lo enviamos al componente principal
        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

  render() {
    return (

      <div className="card">
        <div className="card-body">
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8 text-center mb-1">
            <input
              ref = {this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu Imagen. Ejemplo: Futbol"
            />
          </div>
          <div className="form-group col-md-4 text-center">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default Buscador;
