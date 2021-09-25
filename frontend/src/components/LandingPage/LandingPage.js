import {Link} from 'react-router-dom';
import {
  Box,
  Heading,
  Center,
  LinkOverlay,
  LinkBox,
  Container,
  VStack,
  HStack,
} from '@chakra-ui/react';
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
      bgBlendMode="overlay"
      bgColor="blackAlpha.400"
    >
      <VStack p={6} spacing={6}>
        <Heading as="h1" size="4xl" color="white" textShadow="2px 2px 8px black">
          Willkommen Zuhause!
        </Heading>
        <Heading
          size="xl"
          color="white"
          textShadow="2px 2px 8px black"
          maxW="4xl"
          textAlign="center"
        >
          Finde schnell Hilfe für die Aufgaben des Alltags. Wähle einfach aus, wobei du Hilfe
          benötigst.
        </Heading>
      </VStack>
      <Center>
        <HStack spacing={6}>
          <LinkBox>
            <Link to="/create-inquiry">
              <LinkOverlay>
                <Box height="auto" p="16" bg="brand" textColor="white" rounded="md">
                  <Center>
                    <Heading centerContent size="lg">
                      Hilfe für Pflege erhalten
                    </Heading>
                  </Center>
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to="#">
              <LinkOverlay>
                <Box height="auto" p="16" bg="brand" textColor="white" rounded="md">
                  <Center>
                    <Heading centerContent size="lg">
                      Hilfe im Haushalt erhalten
                    </Heading>
                  </Center>
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
        </HStack>
      </Center>
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
