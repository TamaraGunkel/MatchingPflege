import * as React from 'react';
import {Link} from 'react-router-dom';
import {Box, Heading, Center, LinkOverlay, LinkBox, VStack, HStack} from '@chakra-ui/react';
import {Redirect} from 'react-router-dom';
import {QuestionIcon} from '@chakra-ui/icons';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import BackgroundImage from '../../img/background.jpg';

const theme = {
  background: '#fff',
  fontFamily: 'Lato, sans-serif',
  headerBgColor: '#00b347',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00b347',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#000',
};
const LandingPage = () => {
  const [botOpen, setBotOpen] = React.useState(true);

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
      <VStack p={6}>
        <Heading as="h1" size="4xl" color="white" textShadow="2px 2px 8px black">
          Willkommen Zuhause!
        </Heading>
        <Heading
          pt={5}
          size="xl"
          color="white"
          textShadow="2px 2px 8px black"
          maxW="4xl"
          textAlign="center"
        >
          Finde schnell Hilfe für die Aufgaben des Alltags.
        </Heading>
        <Heading
          size="xl"
          color="white"
          textShadow="2px 2px 8px black"
          maxW="4xl"
          textAlign="center"
        >
          Wähle einfach aus, wobei du Hilfe benötigst.
        </Heading>
      </VStack>
      <Center>
        <HStack spacing={6}>
          <LinkBox>
            <Link to="#">
              <LinkOverlay>
                <Box height="auto" p="16" bg="green.600" textColor="white" rounded="md">
                  <Center>
                    <Heading centerContent size="lg">
                      Hilfe im Haushalt erhalten
                    </Heading>
                  </Center>
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to="/create-inquiry">
              <LinkOverlay>
                <Box height="auto" p="16" bg="green.600" textColor="white" rounded="md">
                  <Center>
                    <Heading centerContent size="lg">
                      Hilfe für Pflege erhalten
                    </Heading>
                  </Center>
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
        </HStack>
      </Center>
      <ThemeProvider theme={theme}>
        <ChatBot
          opened={botOpen}
          toggleFloating={() => setBotOpen(!botOpen)}
          headerTitle=""
          enableSmoothScroll={true}
          floatingIcon={<QuestionIcon color="white" w={6} h={6} />}
          steps={[
            {
              id: '1',
              message:
                'Hallo mein Name ist Peter. Willkommen bei zuhause-in.ms! Ich bin ein automatisches Hilfesystem und kann dich auf unserer Plattform unterstützen. Kann ich dir bei irgendetwas helfen?',
              trigger: '2',
            },
            {id: '2', user: true, trigger: '3'},
            {
              id: '3',
              message:
                'Auf unserer Plattform kannst du deine Pflegebedürfnisse eintragen, damit sich Pflegedienstleister direkt bei dir melden können.',
              trigger: '4',
            },
            {
              delay: 1500,
              id: '4',
              message:
                'Möchtest du über unsere Plattform in Kontakt mit Pflegedienstleistern treten?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                {value: 1, label: 'Ja', trigger: '6'},
                {value: 0, label: 'Nein'},
              ],
            },
            {
              id: '6',
              message: 'Kein Problem. Ich leite dich auf das korrekte Formular weiter.',
              component: <Redirect push to="/create-inquiry" />,
              trigger: '7',
            },
            {
              id: '7',
              component: <Redirect push to="/create-inquiry" />,
            },
          ]}
          floating={true}
        />
      </ThemeProvider>
    </Box>
  );
};

export default LandingPage;
