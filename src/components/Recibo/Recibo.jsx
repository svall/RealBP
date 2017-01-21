import React, { Component } from 'react';
import './Recibo.css';

const date = new Date();

export default class Recibo extends React.Component {
  constructor() {
    super();
    this.state = {
      propiedad: '',
      numapt: '',
      numrecibo: '',

      nombre: '',
      periodoini: '',
      periodofin: '',

      arriendo: 0,
      admon: 0,
      rfte: 0,
      parking: 0,
      externo: 0,
      amoblado: 0,
      comision: 0,
      otroarr: 0,

      observaciones: '',

      efect: 0,
      consigna: 0,
      cheque: 0,
      transfer: 0,
      otropago: 0,

      valormes: 0,
      selnuevo: 'no',

      totrecibo: 0,
      totpago: 0,

      comisamob: 0,
      amobselect: 'no',
      comissegur: 0,
      segselect: 'no',
    };
    this.handleBlurRecibo = this.handleBlurRecibo.bind(this);
    this.handleBlurPago = this.handleBlurPago.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectAmobHandler = this.selectAmobHandler.bind(this);
    this.selectSeguroHandler = this.selectSeguroHandler.bind(this);
    this.selectNuevoHandler = this.selectNuevoHandler.bind(this);
    this.selectPropiedHandler = this.selectPropiedHandler.bind(this);
  }

  componentDidMount() {
    console.log("today is ", date);
  }

// ---- SELECT menu state checkers:
  checkAmoblado() {
    if (this.state.amobselect === 'si') {
      this.setState({
        comisamob: (parseInt(this.state.arriendo) * 0.1).toFixed(2),
      });
    }
    if (this.state.amobselect === 'no') {
      this.setState({
        comisamob: 0,
      });
    }
  }

  checkSeguro() {
    if (this.state.segselect === 'si') {
      this.setState({
        comissegur: (parseInt(this.state.arriendo) * 0.1).toFixed(2),
      });
    }
    if (this.state.segselect === 'no') {
      this.setState({
        comissegur: (parseInt(this.state.arriendo) * 0.08).toFixed(2),
      });
    }
  }

// ------- RECIBO onChange handlers:
  handleChangeApto(event) {
    this.setState({
      numapt: event.target.value,
    });
  }

  handleChangeRecibo(event) {
    this.setState({
      numrecibo: parseInt(event.target.value),
    });
    console.log('recibo ', this.state.numrecibo)
  }

  handleChangeNombre(event) {
    this.setState({
      nombre: event.target.value,
    });
  }

  handleChangePeriodoIni(event) {
    this.setState({
      periodoini: event.target.value,
    });
  }

  handleChangePeriodoFin(event) {
    this.setState({
      periodofin: event.target.value,
    });
  }

  handleChangeArr(event) {
    if (event.target.value > 0) {
      this.setState({
        arriendo: parseInt(event.target.value),
      });
      this.checkAmoblado();
      this.checkSeguro();
    } else {
      this.setState({
        arriendo: 0,
      });
      this.checkAmoblado();
      this.checkSeguro();
    }
  }

  handleChangeAdmon(event) {
    if (event.target.value > 0) {
      this.setState({
        admon: parseInt(event.target.value),
      });
    // console.log("admon: ", (this.state.admon));
    } else {
      this.setState({
        admon: 0,
      });
    }
  }

  handleChangeParking(event) {
    if (event.target.value > 0) {
      this.setState({
        parking: parseInt(event.target.value),
      });
    // console.log("parking: ", (this.state.parking));
    } else {
      this.setState({
        parking: 0,
      });
    }
  }

  handleChangeRfte(event) {
    if (event.target.value > 0) {
      this.setState({
        rfte: parseInt(event.target.value),
      });
    // console.log("rfte: ", (this.state.rfte));
    } else {
      this.setState({
        rfte: 0,
      });
    }
  }

  handleChangeExterno(event) {
    if (event.target.value > 0) {
      this.setState({
        externo: parseInt(event.target.value),
      });
    // console.log("externo: ", (this.state.externo));
    } else {
      this.setState({
        externo: 0,
      });
    }
  }

  handleChangeAmoblado(event) {
    if (event.target.value > 0) {
      this.setState({
        amoblado: parseInt(event.target.value),
      });
    // console.log("amoblado: ", (this.state.amoblado));
    } else {
      this.setState({
        amoblado: 0,
      });
    }
  }

  handleChangeComision(event) {
    if (event.target.value > 0) {
      this.setState({
        comision: parseInt(event.target.value),
      });
    // console.log("comision: ", (this.state.comision));
    } else {
      this.setState({
        comision: 0,
      });
    }
  }

  handleChangeOtroarr(event) {
    if (event.target.value > 0) {
      this.setState({
        otroarr: parseInt(event.target.value),
      });
    // console.log("otroarr: ", (this.state.otroarr));
    } else {
      this.setState({
        otroarr: 0,
      });
    }
  }

  handleChangeObserv(event) {
    this.setState({
      observaciones: event.target.value,
    });
  }

// ------- PAGO handlers:
  handleChangeEfect(event) {
    if (event.target.value > 0) {
      this.setState({
        efect: parseInt(event.target.value),
      });
    } else {
      this.setState({
        efect: 0,
      });
    }
  }

  handleChangeConsigna(event) {
    if (event.target.value > 0) {
      this.setState({
        consigna: parseInt(event.target.value),
      });
    } else {
      this.setState({
        consigna: 0,
      });
    }
  }

  handleChangeCheque(event) {
    if (event.target.value > 0) {
      this.setState({
        cheque: parseInt(event.target.value),
      });
    } else {
      this.setState({
        cheque: 0,
      });
    }
  }

  handleChangeTransfer(event) {
    if (event.target.value > 0) {
      this.setState({
        transfer: parseInt(event.target.value),
      });
    } else {
      this.setState({
        transfer: 0,
      });
    }
  }

  handleChangeOtropago(event) {
    if (event.target.value > 0) {
      this.setState({
        otropago: parseInt(event.target.value),
      });
    } else {
      this.setState({
        otropago: 0,
      });
    }
  }

  handleChangeNuevo(event) {
    // console.log("selnuevo: ", this.state.selnuevo);
    // console.log("target: ", parseInt(event.target.value));
    if (this.state.selnuevo === 'no') {
      this.setState({
        valormes: 0,
      });
      event.target.value = 0;
    }
    if (this.state.selnuevo === 'si' && parseInt(event.target.value) > 0) {
      this.setState({
        valormes: parseInt(event.target.value),
      });
    }
  }

// ------- BLUR/SUBMIT handlers:
  handleBlurRecibo(event) {
    this.setState({
      totrecibo: parseInt((this.state.arriendo + this.state.admon + this.state.rfte + this.state.parking + this.state.externo + this.state.amoblado + this.state.comision + this.state.otroarr)),
    });
  }

  handleBlurPago(event) {
    this.setState({
      totpago: parseInt((this.state.efect + this.state.consigna + this.state.cheque + this.state.transfer + this.state.otropago)),
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/recibonuevo', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        propiedad: this.state.propiedad,
        numapt: this.state.numapt,
        numrecibo: this.state.numrecibo,
        nombre: this.state.nombre,
        periodoini: this.state.periodoini,
        periodofin: this.state.periodofin,
        arriendo: this.state.arriendo,
        admon: this.state.admon,
        rfte: this.state.rfte,
        parking: this.state.parking,
        externo: this.state.externo,
        amoblado: this.state.amoblado,
        comision: this.state.comision,
        otroarr: this.state.otroarr,
        observaciones: this.state.observaciones,
        efect: this.state.efect,
        consigna: this.state.consigna,
        cheque: this.state.cheque,
        transfer: this.state.transfer,
        otropago: this.state.otropago,
        valormes: this.state.valormes,
        selnuevo: this.state.selnuevo,
        totrecibo: this.state.totrecibo,
        totpago: this.state.totpago,
        comisamob: this.state.comisamob,
        amobselect: this.state.amobselect,
        comissegur: this.state.comissegur,
        segselect: this.state.segselect,
      })
    })
    .then(this.setState({
      propiedad: '',
      numapt: '',
      numrecibo: '',
      nombre: '',
      periodoini: '',
      periodofin: '',
      arriendo: 0,
      admon: 0,
      rfte: 0,
      parking: 0,
      externo: 0,
      amoblado: 0,
      comision: 0,
      otroarr: 0,
      observaciones: '',
      efect: 0,
      consigna: 0,
      cheque: 0,
      transfer: 0,
      otropago: 0,
      valormes: 0,
      selnuevo: 'no',
      totrecibo: 0,
      totpago: 0,
      comisamob: 0,
      amobselect: 'no',
      comissegur: 0,
      segselect: 'no',
    }))
    .catch(err => console.log(err));

    // check receipt num and propiedad
    // this.setState({
    //   propiedad: '',
      // numapt: '',
      // numrecibo: '',

      // nombre: '',
      // periodoini: '',
      // periodofin: '',

      // arriendo: 0,
      // admon: 0,
      // rfte: 0,
      // parking: 0,
      // externo: 0,
      // amoblado: 0,
      // comision: 0,
      // otroarr: 0,

      // observaciones: '',

      // efect: 0,
      // consigna: 0,
      // cheque: 0,
      // transfer: 0,
      // otropago: 0,

      // valormes: 0,
      // selnuevo: 'no',

      // totrecibo: 0,
      // totpago: 0,

      // comisamob: 0,
      // amobselect: 'no',
      // comissegur: 0,
      // segselect: 'no',
    // });
  }

// ---- SELECT menu handlers:
  selectPropiedHandler(event) {
    this.setState({
      propiedad: event.target.value,
    });
  }

  selectAmobHandler(event) {
    if (event.target.value === 'si') {
      this.setState({
        comisamob: (parseInt(this.state.arriendo) * 0.1).toFixed(2),
        amobselect: 'si',
      });
    }
    else if (event.target.value === 'no') {
      this.setState({
        comisamob: 0,
        amobselect: 'no',
      });
    }
  }

  selectSeguroHandler(event) {
    if (event.target.value === 'si') {
      this.setState({
        comissegur: (parseInt(this.state.arriendo) * 0.1).toFixed(2),
        segselect: 'si',
      });
    }
    else if (event.target.value === 'no') {
      this.setState({
        comissegur: (parseInt(this.state.arriendo) * 0.08).toFixed(2),
        segselect: 'no',
      });
    }
  }

  selectNuevoHandler(event) {
    if (event.target.value === 'si') {
      this.setState({
        selnuevo: 'si',
        // valormes: this.state.valormes,
      });
    }
    if (event.target.value === 'no') {
      this.setState({
        selnuevo: 'no',
        valormes: 0,
      });
    }
  }

  render() {
    return (
      <container>
        <h1 className="titleComp">Formato de Recibos</h1>
        <div className="formContainer">
          {/*<form onSubmit="event.preventDefault(); return validateMyForm();">*/}
          <form>
            <div className="contOne">
              <div className="labelDivs">Propiedad:
              <select className="aptInfo" name="propiedad" onChange={this.selectPropiedHandler}>
                <option></option>
                <option value="plazaLinares" name="propiedad">Plaza Linares</option>
                <option value="tresTorres" name="propiedad">Tres Torres</option>
                <option value="centroIntegralLasVegas" name="propiedad">Centro Integral Las Vegas</option>
                <option value="terminalDelSur" name="propiedad">Terminal del Sur</option>
                <option value="edificioAbedules" name="propiedad">Edificio Abedules</option>
              </select>
              <input className="aptInfo" name="numapt" onChange={this.handleChangeApto.bind(this)} value={this.state.numapt} id="aptDiv" type="text" placeholder="Num. Apto" />
              <input className="aptInfo" name="numrecibo" onChange={this.handleChangeRecibo.bind(this)} value={this.state.numrecibo} id="recDiv" type="number" placeholder="Num. Recibo" />
              </div>
            </div>
            <div className="contTwo">
              <h3 className="formHeader">DATOS DEL RECIBO</h3>
              <div className="labelDivs">Nombre:
                <input className="inputBox" onChange={this.handleChangeNombre.bind(this)} value={this.state.nombre} type="text" placeholder="texto" />
              </div><br />
              <div className="labelDivs">Periodo de:
                <input className="periInfo" onChange={this.handleChangePeriodoIni.bind(this)} value={this.state.periodoini} type="date" placeholder="texto" />
                a: <input className="periInfo" onChange={this.handleChangePeriodoFin.bind(this)} value={this.state.periodofin} type="date" placeholder="texto" />
              </div><br />
              <div className="labelDivs">Valor Arriendo:
                <input className="inputBox" onChange={this.handleChangeArr.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.arriendo} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Valor Administracion:
                <input className="inputBox" onChange={this.handleChangeAdmon.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.admon} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Retencion en la Fuente:
                <input className="inputBox" onChange={this.handleChangeRfte.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.rfte} type="number" placeholder="numero" />
              </div><br /><hr /><br />
              <div className="labelDivs">Parkings Adicionales:
                <input className="inputBox" onChange={this.handleChangeParking.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.parking} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Arriendos Externos(*):
                <input className="inputBox" onChange={this.handleChangeExterno.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.externo} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Amoblados:
                <input className="inputBox" onChange={this.handleChangeAmoblado.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.amoblado} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Comision 20% BYP:
                <input className="inputBox" onChange={this.handleChangeComision.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.comision} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Otros:
                <input className="inputBox" onChange={this.handleChangeOtroarr.bind(this)} onBlur={this.handleBlurRecibo} value={this.state.otroarr} type="number" placeholder="numero" />
              </div><br /><hr /><br />
              <div className="labelDivs">Observaciones:
                <input className="inputBox" onChange={this.handleChangeObserv.bind(this)} id="observaciones" value={this.state.observaciones} type="texto" placeholder="text" />
              </div><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL RECIBO:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totrecibo}</h3>
              </div><br />
              <label>(*) Que no sean de Tres Torres o Plaza Linares
              </label><br />
            </div>
            <div className="contThree">
              <h3 className="formHeader">DATOS DE PAGO</h3>
              <div className="labelDivs">Efectivo:
                <input className="inputBox" onChange={this.handleChangeEfect.bind(this)} onBlur={this.handleBlurPago} value={this.state.efect} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Consignacion:
                <input className="inputBox" onChange={this.handleChangeConsigna.bind(this)} onBlur={this.handleBlurPago} value={this.state.consigna} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Valor en Cheque:
                <input className="inputBox" onChange={this.handleChangeCheque.bind(this)} onBlur={this.handleBlurPago} value={this.state.cheque} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Transferencia:
                <input className="inputBox" onChange={this.handleChangeTransfer.bind(this)} onBlur={this.handleBlurPago} value={this.state.transfer} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs">Otros:
                <input className="inputBox" onChange={this.handleChangeOtropago.bind(this)} onBlur={this.handleBlurPago} value={this.state.otropago} type="number" placeholder="numero" />
              </div><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>TOTAL PAGADO:</span>
                {/* <input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totpago}</h3>
              </div><br /><hr /><br />
              <div className="labelDivs"><span style={{"fontWeight":"bold"}}>DIFERENCIA ENTRE TOTALES:</span>
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <h3 className="totalsForm" id="totCancel">{this.state.totpago - this.state.totrecibo}</h3>
              </div><br /><hr /><br />
              <div className="labelDivs">Contrato Nuevo:
                {/*<input className="inputBox" type="text" placeholder="text" />*/}
                <select className="aptInfo" onChange={this.selectNuevoHandler}>
                  <option value="no">NO</option>
                  <option value="si">SI</option>
                </select>
              </div><br />
              <div className="labelDivs">Valor 1 Mes de Arriendo:
                <input className="inputBox" onChange={this.handleChangeNuevo.bind(this)} value={this.state.valormes} type="number" placeholder="numero" />
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
          </form>
        </div>
      </container>
    );
  }
}
