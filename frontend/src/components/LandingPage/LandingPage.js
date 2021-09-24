import {Link} from 'react-router-dom';
import {Box, SimpleGrid, Heading, Center, LinkOverlay, LinkBox} from '@chakra-ui/react';

const LandingPage = () => (
  <SimpleGrid columns={1} spacing={10}>
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
  </SimpleGrid>
);

export default LandingPage;
