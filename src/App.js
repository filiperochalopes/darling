import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/app.scss';
import SimplePage from './pages/simple_page';
import asyncComponent from './functions/async_component';
import Button from '@material-ui/core/Button';

const AsyncComponent = asyncComponent(() => import("./pages/async_page"));

export const AppContext = React.createContext();

class App extends Component {
  constructor(props){
    super(props)

    // State com todos os dados globais necessários para a aplicação
    this.state = {
      // Context state
      secIsOpened : false
    };
  }

  getSaudacao = () => {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      return "Bom dia"
    } else if (curHr < 18) {
      return "Boa tarde"
    } else {
      return "Boa noite"
    }
  }

  toggleSec = () => {
    if(this.state.secIsOpened){
      this.setState({ secIsOpened : false })
    }else{
      this.setState({ secIsOpened : true })
    }
  }

  render() {
    if(false){ return (
    <Router>
      <AppContext.Provider value={this.state} >
      <Switch>
        <Route exact path="/" component={SimplePage} />   
        <Route exact path="/pageAsync" component={AsyncComponent} />
        <AppContext.Consumer>
        { context =>  null }
        </AppContext.Consumer>
      </Switch>
      </AppContext.Provider>
    </Router>
    ); }else{
      return (
        <div>
          <h1>Olá,</h1>
          <h2>{this.getSaudacao()} meu 💕</h2>
          <section className={`readmore ${this.state.secIsOpened ? "opened" : null}`}><p>Pensando em mais um esforço de te ajudar a ser perseverante 🛤 e ter um maior controle das ajudas e conquistas 🎉! Para que nos alegremos juntos e consigamos conquistar vitórias maiores, eu decidi criar um pequeno sistema que auxiliasse nessa empreitada.</p>
          <p>Mas é claro que antes gostaria de saber de você se gostaria e aceita que eu crie algo desse gênero 😅</p>
          <p>Aqui a ideia é conseguirmos ver desde sua dieta 🍲, se conseguiu reduzir o 🍞 🍹 🍰 'pão, suco e bolo', até questões de exercício físico 💪, alvos e verificar realação dos stress, e aí, topa?</p><br/><br/>
          <Button href={`https://wa.me/5571992540736?text=${encodeURI("Sobre o programinha que você quer fazer para mim, 😍 Claro que sim")}`} >😍 Claro que sim</Button>
          <Button href={`https://wa.me/5571992540736?text=${encodeURI("Sobre o programinha que você quer fazer para mim, 😠 Quero isso não, muito controle!")}`} >😠 Quero isso não, muito controle!</Button>
          <div className="cortina"/>
          <span className="lertudo" onClick={this.toggleSec}>{this.state.secIsOpened ? "Ler menos" : "Ler tudo"}</span>
          </section>
        </div>
      )
    }
  }
}

export default App;
