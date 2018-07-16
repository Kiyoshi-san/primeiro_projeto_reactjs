import React, { Component } from 'react';

class MeuComponente extends Component {
  atualizouNome (event) {
    this.setState({
      stateNome: event.target.value
    });
  }
  /*Lifecycle Methods*/
  componentWillMount(){
    alert("Vai montar o componente");
  }

  componentDidMount(){
    alert("Montou o componente");
  }

  componentWillUpdate(proxProps, proxState){
    console.log(this.props, this.state, proxProps, proxState);
  }

  componentDidUpdate(antesProps, antesState){
    console.log(this.props, this.state, antesProps, antesState);
  }

  shouldComponentUpdate(proxProps, proxState){
    // return false;
    return true;
  }
  /*Lifecycle Methods - FIM*/

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
