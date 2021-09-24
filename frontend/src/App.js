import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VStack} from '@chakra-ui/react';

import LandingPage from './components/LandingPage/LandingPage';
import Inquiries from './components/Inquiries/Inquiries';
import CreateInquiry from './components/CreateInquiry/CreateInquiry';
import LoginForm from './components/LoginForm/LoginForm';
import Success from './components/Success/Success';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <VStack w="100vw" p="0" spacing={8}>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/inquiries">
            <Inquiries />
          </Route>
          <Route path="/create-inquiry">
            <CreateInquiry />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </VStack>
    </Router>
  );
}

export default App;
