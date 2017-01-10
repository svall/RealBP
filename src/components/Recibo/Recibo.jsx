import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Recibo.css';

export default class Recibo extends React.Component {
  constructor() {
    super();
    this.state = {
      arriendo: '',
      admon: '',
      rfte: '',
      parking: '',
      externo: '',
      amoblado: '',
      comision: '',
      otroarr: '',

      efect: '',
      consigna: '',
      cheque: '',
      transfer: '',
      otropago: '',

      valormes: '',

      totRecibo: 0,
      totPago: 0,

      comisamob: 0,
      comissegur: 0,
    };
    this.handleBlurRecibo = this.handleBlurRecibo.bind(this);
    this.handleBlurPago = this.handleBlurPago.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectAmobHandler = this.selectAmobHandler.bind(this);
    this.selectSeguroHandler = this.selectSeguroHandler.bind(this);
  }

// ------- RECIBO handlers:
  handleChangeArr(event) {
    this.setState({
      arriendo: parseInt(event.target.value),
    });
  }

  handleChangeAdmon(event) {
    this.setState({
      admon: parseInt(event.target.value),
    });
  }

  handleChangeParking(event) {
    this.setState({
      parking: parseInt(event.target.value),
    });
  }

  handleChangeRfte(event) {
    this.setState({
      rfte: parseInt(event.target.value),
    });
  }

  handleChangeExterno(event) {
    this.setState({
      externo: parseInt(event.target.value),
    });
  }

  handleChangeAmoblado(event) {
    this.setState({
      amoblado: parseInt(event.target.value),
    });
  }

  handleChangeComision(event) {
    this.setState({
      comision: parseInt(event.target.value),
    });
  }

  handleChangeOtroarr(event) {
    this.setState({
      otroarr: parseInt(event.target.value),
    });
  }

// ------- PAGO handlers:
  handleChangeEfect(event) {
    this.setState({
      efect: parseInt(event.target.value),
    });
  }

  handleChangeConsigna(event) {
    this.setState({
      consigna: parseInt(event.target.value),
    });
  }

  handleChangeCheque(event) {
    this.setState({
      cheque: parseInt(event.target.value),
    });
  }

  handleChangeTransfer(event) {
    this.setState({
      transfer: parseInt(event.target.value),
    });
  }

  handleChangeOtropago(event) {
    this.setState({
      otropago: parseInt(event.target.value),
    });
  }

// ------- BLUR/SUBMIT handlers:
  handleBlurRecibo(event) {
    this.setState({
      totRecibo: parseInt(this.state.arriendo + this.state.admon + this.state.rfte + this.state.parking + this.state.externo + this.state.amoblado + this.state.comision + this.state.otroarr),
    });
  }

  handleBlurPago(event) {
    this.setState({
      totPago: parseInt(this.state.efect + this.state.consigna + this.state.cheque + this.state.transfer + this.state.otropago),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      arriendo: '',
      admon: '',
      rfte: '',
      parking: '',
      externo: '',
      amoblado: '',
      comision: '',
      otroarr: '',

      efect: '',
      consigna: '',
      cheque: '',
      transfer: '',
      otropago: '',

      valormes: '',

      totRecibo: 0,
      totPago: 0,

      comisamob: 0,
      comissegur: 0,
    });
  }

// ---- SELECT menu handlers:
  selectAmobHandler(event) {
    if (event.target.value === 'si') {
      this.setState({
        comisamob: parseInt(this.state.arriendo) * 0.1,
      });
    }
    if (event.target.value === 'no') {
      this.setState({
        comisamob: 0,
      });
    }
  }

  selectSeguroHandler(event) {
    if (event.target.value === 'si') {
      this.setState({
        comissegur: parseInt(this.state.arriendo) * 0.1,
      });
    }
    if (event.target.value === 'no') {
      this.setState({
        comissegur: parseInt(this.state.arriendo) * 0.08,
      });
    }
  }

  render() {
    return (
      <container>
        <h1 className="titleComp">Formato de Recibos</h1>
        <div className="formContainer">
          {/*<form onSubmit="event.preventDefault(); return validateMyForm();">*/}
          <form onSubmit={this.handleSubmit}>
            <div className="contOne">
              <div className="labelDivs">Propiedad:
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
              </div><br />
              <div className="labelDivs">Periodo Cancelado:
                <input className="inputBox" type="text" placeholder="text" />
              </div><br />
              <div className="labelDivs">Valor Arriendo:
                <input className="inputBox" onChange={this.handleChangeArr.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.arriendo} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Valor Administracion:
                <input className="inputBox" onChange={this.handleChangeAdmon.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.admon} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">RFTE (anotar 1 si se hizo retencion):
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br />
              <div className="labelDivs">Retencion en la Fuente:
                <input className="inputBox" onChange={this.handleChangeRfte.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.rfte} type="text" placeholder="num" />
              </div><br /><hr></hr><br />
              <div className="labelDivs">Parkings Adicionales:
                <input className="inputBox" onChange={this.handleChangeParking.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.parking} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Arriendos Externos(*):
                <input className="inputBox" onChange={this.handleChangeExterno.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.externo} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Amoblados:
                <input className="inputBox" onChange={this.handleChangeAmoblado.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.amoblado} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Comision 20% BYP:
                <input className="inputBox" onChange={this.handleChangeComision.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.comision} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Otros:
                <input className="inputBox" onChange={this.handleChangeOtroarr.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.otroarr} type="text" placeholder="num" />
              </div><br /><hr /><br />
              <div className="labelDivs">Observaciones:
                <input className="inputBox" id="observaciones" type="text" placeholder="text" />
              </div><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL RECIBO:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totRecibo}</h3>
              </div><br />
              <label>(*) Que no sean de Tres Torres o Plaza Linares
              </label><br />
            </div>
            <div className="contThree">
              <h3 className="formHeader">DATOS DE PAGO</h3>
              <div className="labelDivs">Efectivo:
                <input className="inputBox" onChange={this.handleChangeEfect.bind(this)} onBlur={this.handleBlurPago} value={this.state.efect} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Consignacion:
                <input className="inputBox" onChange={this.handleChangeConsigna.bind(this)} onBlur={this.handleBlurPago} value={this.state.consigna} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Valor en Cheque:
                <input className="inputBox" onChange={this.handleChangeCheque.bind(this)} onBlur={this.handleBlurPago} value={this.state.cheque} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Transferencia:
                <input className="inputBox" onChange={this.handleChangeTransfer.bind(this)} onBlur={this.handleBlurPago} value={this.state.transfer} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Otros:
                <input className="inputBox" onChange={this.handleChangeOtropago.bind(this)} onBlur={this.handleBlurPago} value={this.state.otropago} type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL PAGADO:</span>
                {/* <input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totPago}</h3>
              </div><br /><hr></hr><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>DIFERENCIA ENTRE TOTALES:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totPago - this.state.totRecibo}</h3>
              </div><br /><hr></hr><br />
              <div className="labelDivs">Contrato Nuevo(**):
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo">
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br />
              <div className="labelDivs">Valor 1 Mes de Arriendo:
                <input className="inputBox" type="text" placeholder="num" />
              </div><br />
              <div className="labelDivs">Amoblado:
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo" onChange={this.selectAmobHandler}>
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br />
              <input type="text" placeholder="diezamobl" value={this.state.comisamob} /><br /><br />
              <div className="labelDivs">Con Avalcrear:
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo" onChange={this.selectSeguroHandler}>
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br />
              <input type="text" placeholder="diezuocho" value={this.state.comissegur} />
            </div>
            <div className="contFour">
              <input type="button" value="GUARDAR" className="receiptBttn" onClick={this.handleSubmit} />
            </div>
            {/*<input type="hidden" placeholder="1conseguro" value=""/>
            <input type="hidden" placeholder="1sinseguro" />
            <input type="hidden" placeholder="diez" />
            <input type="hidden" placeholder="ocho" />
            <input type="hidden" placeholder="1ingresoamob" />
            <input type="hidden" placeholder="diezamobl" />*/}
          </form>
        </div>
      </container>
    );
  }
}
