import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VStack, Box, Heading} from '@chakra-ui/react';

import LandingPage from './components/LandingPage/LandingPage';
import Inquiries from './components/Inquiries/Inquiries';
import CreateInquiry from './components/CreateInquiry/CreateInquiry';
import LoginForm from './components/LoginForm/LoginForm';
import Success from './components/Success/Success';

function App() {
  return (
    <VStack w="100vw" p="0">
      <Box p={8} boxShadow="lg" w="100%">
        <Heading size="lg">Zuhause in Münster</Heading>
      </Box>
      <Router>
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
      </Router>
    </VStack>
  );
}

export default App;
