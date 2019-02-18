import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import StateHooksDemo from './StateHooksDemo';
import EffectHooksDemo from './EffectHooksDemo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/useState" component={StateHooksDemo} />
          <Route exact path="/useEffect" component={EffectHooksDemo} />
        </Switch>
      </div>
    );
  }
}

export default App;
