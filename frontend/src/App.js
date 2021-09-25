import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Flex} from '@chakra-ui/react';

import LandingPage from './components/LandingPage/LandingPage';
import Inquiries from './components/Inquiries/Inquiries';
import CreateInquiry from './components/CreateInquiry/CreateInquiry';
import LoginForm from './components/LoginForm/LoginForm';
import Success from './components/Success/Success';
import Header from './components/Header/Header';
import DetailsInquiry from "./components/DetailsInquiry/DetailsInquiry";

function App() {
  return (
    <Router>
      <Flex w="100vw" h="100vh" p="0" direction="column" alignItems="stretch">
        <Header />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/inquiries">
            <Inquiries />
          </Route>
          <Route path="/detailsInquiry">
            <DetailsInquiry />
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
      </Flex>
    </Router>
  );
}

export default App;
