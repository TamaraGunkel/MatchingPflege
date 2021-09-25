import {Link} from 'react-router-dom';
import {Box, SimpleGrid, Heading, Center, LinkOverlay, LinkBox, Container} from '@chakra-ui/react';
import {QuestionIcon} from '@chakra-ui/icons';
import ChatBot from 'react-simple-chatbot';

import BackgroundImage from '../../img/background.jpg';

const LandingPage = () => {
  const parseMessage = input => {
    return input;
  };

  return (
    <Box
      flexGrow="1"
      bgSize="cover"
      bgImage={BackgroundImage}
      bgBlendMode="lighten"
      bgColor="black"
    >
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
      <ChatBot
        headerTitle=""
        botDelay={750}
        enableSmoothScroll={true}
        floatingIcon={<QuestionIcon color="white" w={6} h={6} />}
        steps={[
          {
            id: 'computer-response',
            message: parseMessage('{previousValue}'),
            trigger: 'user-input',
          },
          {
            id: 'user-input',
            user: true,
            trigger: 'computer-response',
          },
        ]}
        floating={true}
      />
    </Box>
  );
};

export default LandingPage;
