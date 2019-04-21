import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/app.scss';
import SimplePage from './pages/simple_page';
import asyncComponent from './functions/async_component';

const AsyncComponent = asyncComponent(() => import("./pages/async_page"));

export const AppContext = React.createContext();

class App extends Component {
  constructor(props){
    super(props)

    // State com todos os dados globais necessários para a aplicação
    this.state = {
      // Context state
    };
  }

  render() {
    return (
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
    );
  }
}

export default App;
