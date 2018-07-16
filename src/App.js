import React, { Component } from 'react';
import MeuComponente from './MeuComponente';
import logo from './logo.svg';
import './App.css';

class App extends Component {
/*Event Handlers*/
  clicouMouse(){
    alert("clicou");
  }

  mudouInput(event){
    console.log(event.target.value);
  }

  enviouForm(event){
    event.preventDefault(); // previne que faça o refresh da página qdo aperta submit
    alert("Formulário enviado");
  }
/*Event Handlers - FIM*/

/*Ref*/

  /*Constructor and Binding methods*/
  /*- onSubmit para funcionar a referência é necessário fazer o Binding
  - Sempre que for passar o método de um componente para outro componente, é necessário fz o binding
  */
  constructor(props){
    super(props);

      /*State*/
        this.state = {
          stateTitulo: 'Titulo da Aplicação',
          stateNome: 'Nome inicial'
        };
      /*State - FIM*/

    this.enviouFormRef = this.enviouFormRef.bind(this);

      /*SetState*/      
        this.clicouCliqueMe = this.clicouCliqueMe.bind(this);
      /*SetState - FIM*/    

  }
  /*Constructor and Binding methods - FIM*/
  enviouFormRef(event){
    event.preventDefault(); // previne que faça o refresh da página qdo aperta submit
    // alert("Formulário enviado");
    console.log(this.input.value);
  }
/*Ref - FIM*/

/*SetState*/      
  clicouCliqueMe(){
    this.setState({
      stateTitulo:"Novo Titulo da app",
      stateNome:"Novo nome"
    });
  }
/*SetState - FIM*/      

  render() {
    let nome = 'Kiyoshi';

    const lista = [
      'item1',
      'item2',
      'item3',
      'item4'
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Olá {nome}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

/*Event Handlers*/
        <div>
          <h1>
            {
              lista.map(item => {
                return (
                  <div key={item} onClick={this.clicouMouse}>{item}</div>
                );
              })
            }
          </h1>
        </div>

        <input onChange={this.mudouInput}/>

        <form onSubmit={this.enviouForm}>
          <input/>
        </form>
/*Event Handlers - FIM*/

/*Ref*/
        <form onSubmit={this.enviouFormRef}>
          <input ref={input => this.input = input}/>
        </form>
/*Ref - FIM*/

        /*State*/
          <div>
            <h1>
              {this.state.stateTitulo}
            </h1>
          </div>
        /*State -  FIM*/

        /*SetState*/
        <div>
          <h1>{this.state.stateTitulo}</h1>
          <div onClick={this.clicouCliqueMe}>Clique Me</div>
        </div>
        /*SetState - FIM*/

        /*MeuComponente*/
        <MeuComponente 
          /*passando o props*/
          propTitulo={this.state.stateTitulo}
          propNome={this.state.stateNome}
          propClicou={this.clicouCliqueMe}
          /*passando o props - FIM*/
        />
        /*MeuComponente - FIM*/
      </div>
    );
  }
}

export default App;
