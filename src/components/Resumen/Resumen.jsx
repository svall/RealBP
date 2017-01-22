import React, { Component } from 'react';
// import { Link } from 'react-router';
let apiRecibos;
export default class Resumen extends React.Component {
  constructor() {
    super();
    this.state = {
      resobject: [],
      propiedad: 'prop',
      resumen: 'here it goes',
    };
    this.saveDataInState = this.saveDataInState.bind(this);
  }

  componentDidMount() {
    // let apiRecibos;
    // console.log('lets fetch call');
    // function saveDataInState() {
    //   console.log(apiRecibos);
    //   this.setState({
    //     // resobject: apiRecibos,
    //     propiedad: data[16].propiedad,
    //   })
    // }

    function displayRecibos() {
      fetch('/resumen/recibos')
        .then(r => r.json())
        .then((data) => {
          apiRecibos = data[16];
          console.log('data from api in comp ', apiRecibos);

        })
        .catch(err => console.log(err));
    }
    displayRecibos();
  }

   saveDataInState() {
      console.log(apiRecibos);
      this.setState({
        resobject: apiRecibos,
        propiedad: apiRecibos.propiedad,
      })
    }



  render() {
    return (
      <container>
        <h1 className="titleComp">Resumen</h1>
        <p>{this.state.resumen}</p>
        <p>{this.state.propiedad}</p>
        <button onClick={this.saveDataInState}>LOAD</button>
      </container>
    );
  }
}
