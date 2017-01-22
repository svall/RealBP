import React, { Component } from 'react';
import Linea from '../Linea/Linea.jsx';
import ReciboMenu from '../ReciboMenu/ReciboMenu.jsx';
import './Resumen.css';

// import { Link } from 'react-router';
let apiRecibos;
export default class Resumen extends React.Component {
  constructor() {
    super();
    this.state = {
      resobject: [],
      resumen: 'Todos los recibos:',
    };
    this.saveDataInState = this.saveDataInState.bind(this);
    // this.filterRecibos = this.filterRecibos.bind(this);
  }

  componentDidMount() {
    function displayRecibos() {
      fetch('/resumen/recibos')
        .then(r => r.json())
        .then((data) => {
          apiRecibos = data;
          console.log('data from api in comp ', apiRecibos);
        })
        .catch(err => console.log(err));
    }
    displayRecibos();
  }

  filterRecibos(data) {
    console.log('filter function ', apiRecibos);
    return data.map((data, index) =>
      <div>
        <Linea
          key={index}
          propiedad={data.propiedad}
          numapt={data.numapt}
          numrecibo={data.numrecibo}
          nombre={data.nombre}
          periodoini={data.periodoini}
          periodofin={data.periodofin}
          arriendo={data.arriendo}
          admon={data.admon}
          rfte={data.rfte}
          parking={data.parking}
          externo={data.externo}
          amoblado={data.amoblado}
          comision={data.comision}
          otroarr={data.otroarr}
          observaciones={data.observaciones}
          efect={data.efect}
          consigna={data.consigna}
          cheque={data.cheque}
          transfer={data.transfer}
          otropago={data.otropago}
          valormes={data.valormes}
          selnuevo={data.selnuevo}
          totrecibo={data.totrecibo}
          totpago={data.totpago}
          comisamob={data.comisamob}
          amobselect={data.amobselect}
          comissegur={data.comissegur}
          segurselect={data.segurselect}
        />
      </div>
    )
  }

  saveDataInState() {
    console.log(apiRecibos);
    this.setState({
      resobject: apiRecibos,
    });
    this.filterRecibos(apiRecibos);
  }

  render() {
    return (
      <container>
        <h1 className="titleComp">Resumen</h1>
        <p>{this.state.resumen}</p>
        <button onClick={this.saveDataInState}>LOAD</button>
        <div className="containScroll">
          <ReciboMenu />
          <div id="linesContent">{this.filterRecibos(this.state.resobject)}</div>
        </div>

      </container>
    );
  }
}
