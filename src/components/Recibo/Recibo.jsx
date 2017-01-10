import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Recibo.css';

export default class Recibo extends React.Component {
  constructor() {
    super();
    this.state = {
      arriend: '',
      admon: '',
      rfte: '',
      parking: '',
      externo: '',
      amoblado: '',
      comision: '',
      otroarr: '',
      totRecibo: 0
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeArr(event) {
    this.setState({
      arriend: parseInt(event.target.value)
    })
  }

  handleChangeAdmon(event) {
    this.setState({
      admon: parseInt(event.target.value)
    })
  }

  handleBlur(event) {
    this.setState({
      totRecibo: parseInt(this.state.arriend + this.state.admon + this.state.rfte + this.state.parking + this.state.externo + this.state.amoblado + this.state.comision + this.state.otroarr)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <container>
        <h1 className="titleComp">Formato de Recibos</h1>
        <div className="formContainer">
          {/*<form onSubmit="event.preventDefault(); return validateMyForm();">*/}
          <form onSubmit={this.handleSubmit}>
            <div className="contOne">
              <div className="labelDivs">Edificio:
              <select className="aptInfo">
                <option></option>
                <option value="plazaLinares">Plaza Linares</option>
                <option value="tresTorres">Tres Torres</option>
                <option value="centroIntegralLasVegas">Centro Integral Las Vegas</option>
                <option value="terminaldelSur">Terminal del Sur</option>
                <option value="edificioAbedules">Edificio Abedules</option>
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
                <input className="inputBox" onChange={this.handleChangeArr.bind(this)} onBlur={this.handleBlur} value={this.state.arriend} type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Valor Administracion:
                <input className="inputBox" onChange={this.handleChangeAdmon.bind(this)} onBlur={this.handleBlur} value={this.state.admon} type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">RFTE (anotar 1 si se hizo retencion):
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br></br>
              <div className="labelDivs">Retencion en la Fuente:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Parkings Adicionales:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Arriendos Externos(*):
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Amoblados:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Comision 20% BYP:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Otros:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Observaciones:
                <input className="inputBox" id="observaciones" type="text" placeholder="text" />
              </div><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL RECIBO:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totRecibo}</h3>
              </div><br></br>
              <label>(*) Que no sean de Tres Torres o Plaza Linares
              </label><br></br>
            </div>
            <div className="contThree">
              <h3 className="formHeader">DATOS DE PAGO</h3>
              <div className="labelDivs">Efectivo:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Consignacion:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Valor en Cheque:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Transferencia:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Otros:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL PAGADO:</span>
                {/* <input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">0</h3>
              </div><br></br><hr></hr><br></br>
              <input type="button" value="VERIFICAR VALORES" className="totalBttn" /><br></br><br></br>
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>DIFERENCIA ENTRE TOTALES:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">0</h3>
              </div><br></br><hr></hr><br></br>
              <div className="labelDivs">Contrato Nuevo(**):
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br></br>
              <div className="labelDivs">Valor 1 Mes de Arriendo:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br></br>
              <div className="labelDivs">Amoblado:
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br></br>
              <div className="labelDivs">Con Avalcrear:
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div>
            </div>
            <div className="contFour">
              <input type="button" value="GUARDAR" className="receiptBttn" />
            </div>
          </form>
        </div>
      </container>
    );
  }
}
