import React from 'react';
import ReactDOM from 'react-dom';
import './Linea.css';

// const Linea = props => (
export default class Linea extends React.Component {
  render() {
    return (
      <container>
        <div className="lineaContainer">
          <input type="button" value="EDITAR" />
          <input type="text" className="lineInputs" value={this.props.numrecibo} />

          <input type="text" className="lineInputs" value={this.props.propiedad} />
          <input type="text" className="lineInputs" value={this.props.numapt} />
          <input type="text" className="lineInputs" value={this.props.nombre} />
          <input type="text" className="lineInputs" value={this.props.periodoini} />
          <input type="text" className="lineInputs" value={this.props.periodofin} />
          <input type="text" className="lineInputs" value={this.props.arriendo} />
          <input type="text" className="lineInputs" value={this.props.admon} />
          <input type="text" className="lineInputs" value={this.props.rfte} />
          <input type="text" className="lineInputs" value={this.props.parking} />
          <input type="text" className="lineInputs" value={this.props.externo} />
          <input type="text" className="lineInputs" value={this.props.amoblado} />
          <input type="text" className="lineInputs" value={this.props.comision} />
          <input type="text" className="lineInputs" value={this.props.otroarr} />
          <input type="text" className="lineInputs" id="colMarcar" value={this.props.totrecibo} />

          <input type="text" className="lineInputs" value={this.props.efect} />
          <input type="text" className="lineInputs" value={this.props.consigna} />
          <input type="text" className="lineInputs" value={this.props.cheque} />
          <input type="text" className="lineInputs" value={this.props.transfer} />
          <input type="text" className="lineInputs" value={this.props.otropago} />
          <input type="text" className="lineInputs" id="colMarcar" value={this.props.totpago} />

          <input type="text" className="lineInputs" value={this.props.selnuevo} />
          <input type="text" className="lineInputs" value={this.props.valormes} />
          <input type="text" className="lineInputs" value={this.props.amobselect} />
          <input type="text" className="lineInputs" value={this.props.comisamob} />
          <input type="text" className="lineInputs" value={this.props.segurselect} />
          <input type="text" className="lineInputs" value={this.props.comissegur} />
          <input type="text" className="lineInputs" value={this.props.observaciones} />
        </div>
      </container>
    );
  }
}
// )

// export default Linea;
