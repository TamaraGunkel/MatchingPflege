import logo from './logo.svg';
import LandingPage from './components/LandingPage/LandingPage'
import {ChakraProvider} from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
function App() {
  return (
      <ChakraProvider>
          <div className="App">
              <header className="App-header">
                  <Container>
                      <LandingPage></LandingPage>
                  </Container>
              </header>
          </div>
      </ChakraProvider>
  );
}

export default App;
