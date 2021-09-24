import LandingPage from './components/LandingPage/LandingPage';
import {Container} from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <LandingPage></LandingPage>
        </Container>
      </header>
    </div>
  );
}

export default App;
