import React, { Component } from 'react';

class MeuComponente extends Component {
  render() {
    return (
      <div className="component">
        <h1>Este é um componente dentro de outro</h1>
        /*passando o props*/
        <h2>{this.props.propTitulo}</h2>
        <h2>{this.props.propNome}</h2>
        <div onClick={this.props.propClicou}>Me clique</div>
        /*passando o props - FIM*/
      </div>
    );
  }
}

export default MeuComponente;
