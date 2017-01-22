import React from 'react';
import ReactDOM from 'react-dom';
import './ReciboMenu.css';


export default class ReciboMenu extends React.Component {
  render() {
    return (
      <container>
        <div className="reciboMenuContainer">
          <div className="eachTitleElement">Num. Recibo</div>

          <div className="eachTitleElement">Propiedad</div>
          <div className="eachTitleElement">Num. Apt.</div>
          <div className="eachTitleElement">Nombre</div>
          <div className="eachTitleElement">Desde</div>
          <div className="eachTitleElement">Hasta</div>
          <div className="eachTitleElement">Arriendo</div>
          <div className="eachTitleElement">Admon.</div>
          <div className="eachTitleElement">Ret. Fuente</div>
          <div className="eachTitleElement">Parking</div>
          <div className="eachTitleElement">Arr. Externo</div>
          <div className="eachTitleElement">Amoblado</div>
          <div className="eachTitleElement">Comision ByP</div>
          <div className="eachTitleElement">Otro Arriendo</div>
          <div className="eachTitleElement" id="colMarcar">Total Recibo</div>

          <div className="eachTitleElement">Efectivo</div>
          <div className="eachTitleElement">Consignacion</div>
          <div className="eachTitleElement">Cheque</div>
          <div className="eachTitleElement">Transferencia</div>
          <div className="eachTitleElement">Otro</div>
          <div className="eachTitleElement" id="colMarcar">Total Pago</div>

          <div className="eachTitleElement">Contrato Nuevo?</div>
          <div className="eachTitleElement">Comision Nuevo?</div>
          <div className="eachTitleElement">Amoblado?</div>
          <div className="eachTitleElement">Comision Amob.</div>
          <div className="eachTitleElement">Seguro?</div>
          <div className="eachTitleElement">Comision Seguro</div>
          <div className="eachTitleElement">Observaciones</div>

        </div>
      </container>
    );
  }
}
