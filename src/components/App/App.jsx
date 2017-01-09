import React, { Component } from 'react';
import { Link } from 'react-router';
// var headerBar = require('../../styles/style').headerBar;
import './App.css';

export default class App extends React.Component {

  render() {
    return(
      <container>
        <header className="mainMenuHeader">
          <h1 className="mainTitle">Plataforma BYP</h1>
          <div className="linksMenu">
            <Link to="/" className="linksPestana">Home |</Link>
            <Link to="/recibo" className="linksPestana">Recibos |</Link>
            <Link to="/resumen" className="linksPestana">Resumen</Link>
          </div>
        </header><hr></hr>
        {this.props.children}
      </container>
    );
  }
}
