import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './Home';

import './App.scss';
import Create from './Create';
import Edit from './Edit';


class App extends Component {
  render() {
    return (
       <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
       </HashRouter>
   );
  }
}

export default App;