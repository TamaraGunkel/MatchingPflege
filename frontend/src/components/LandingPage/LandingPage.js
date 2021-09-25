import {Link} from 'react-router-dom';
import {Box, SimpleGrid, Heading, Center, LinkOverlay, LinkBox, Container} from '@chakra-ui/react';

import BackgroundImage from '../../img/background.jpg';

const LandingPage = () => (
  <Box flexGrow="1" bgSize="cover" bgImage={BackgroundImage} bgBlendMode="lighten" bgColor="black">
    <Container filter="brightness(100%)">
      <LinkBox>
        <Link to="/create-inquiry">
          <LinkOverlay>
            <Box height="auto" p="50px" bg="brand" textColor="white" rounded="md">
              <Center>
                <Heading centerContent size="lg">
                  Anfrage erstellen
                </Heading>
              </Center>
            </Box>
          </LinkOverlay>
        </Link>
      </LinkBox>
    </Container>
  </Box>
);

export default LandingPage;
