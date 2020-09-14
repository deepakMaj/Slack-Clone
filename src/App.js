import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Slack from './components/Slack'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={SignIn} />
        <Route exact path="/main" component={Slack} />
        <SignIn />
      </Switch>
    </div>
  );
}

export default App;
