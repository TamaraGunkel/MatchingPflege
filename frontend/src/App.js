import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/inquiries"></Route>
        <Route path="/create-inquiry"></Route>
        <Route path="/success"></Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
