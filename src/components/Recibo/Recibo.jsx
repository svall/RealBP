import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Recibo.css';

export default class App extends React.Component {

  render() {
    return(
      <container>
        <h1 className="titleComp">Recibos</h1>
        <div className="formContainer">
          <form onsubmit="event.preventDefault(); return validateMyForm();">
          {/*<form onsubmit="return false;">*/}
            <div className="contOne">
              <div className="labelDivs">Edificio:
              <select className="aptInfo">
                <option></option>
                <option value="Plaza Linares">Plaza Linares</option>
                <option value="Tres Torres">Tres Torres</option>
                <option value="Centro Integral Las Vegas">Centro Integral Las Vegas</option>
                <option value="Terminal del Sur">Terminal del Sur</option>
                <option value="Edificio Abedules">Edificio Abedules</option>
              </select>
              <input className="aptInfo" id="aptDiv" type="text" placeholder="Num. Apto" />
              <input className="aptInfo" id="recDiv" type="text" placeholder="Num. Recibo" />
              </div>
            </div>
            <div className="contTwo">
              <h3 className="formHeader">DATOS DEL RECIBO</h3>
              <div className="labelDivs">Nombre:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Periodo Cancelado:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Valor Arriendo:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Valor Administracion:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">RFTE (anotar 1 si se hizo retencion):
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Retencion en la Fuente:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Parkings Adicionales:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Arriendos Externos(*):
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Amoblados:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Comision 20% BYP:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Otros:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Observaciones:
                <input className="inputBox" id="observaciones" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL CANCELADO:</span>
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <label>(*) Que no sean de Tres Torres o Plaza Linares
              </label><br></br>
            </div>
            <div className="contThree">
              <h3 className="formHeader">FORMA DE PAGO</h3>
              <div className="labelDivs">Efectivo:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Consignacion:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Valor en Cheque:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Transferencia:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Otros:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL PAGADO:</span>
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>DIFERENCIA ENTRE TOTALES:</span>
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Contrato Nuevo(**):
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Valor 1 Mes de Arriendo(**):
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Amoblado:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs">Con Avalcrear:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br></br>
              <label>(**) Si es contrato nuevo, rellenar los dos campos
              </label>
            </div>
            <div className="contFour">
              <input type="submit" value="GUARDAR" className="receiptBttn" />
            </div>
          </form>
        </div>
      </container>
    );
  }
}
