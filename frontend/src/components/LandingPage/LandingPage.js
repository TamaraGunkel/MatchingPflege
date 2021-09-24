import {Link} from 'react-router-dom';
import {Box, SimpleGrid, Heading, Center, LinkOverlay, LinkBox} from '@chakra-ui/react';

function LandingPage(props) {
  return (
    <div>
      <Center>
        <Heading>Who Cares?</Heading>
      </Center>
      <SimpleGrid columns={2} spacing={10}>
        <LinkBox>
          <Link to="/login">
            <LinkOverlay>
              <Box height="auto" p="50px" bg="tomato">
                <Center>
                  <Heading centerContent size="lg">
                    Login für Pflegedienste
                  </Heading>
                </Center>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>

        <LinkBox>
          <Link to="#">
            <LinkOverlay>
              <Box height="auto" p="50px" bg="tomato">
                <Center>
                  <Heading centerContent size="lg">
                    Anfrage erstellen
                  </Heading>
                </Center>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>
      </SimpleGrid>
    </div>
  );
}

export default LandingPage;
