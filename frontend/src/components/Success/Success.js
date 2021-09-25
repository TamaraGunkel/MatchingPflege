import {Center, VStack, Heading, Text, Container} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';

const Success = () => (
  <Center>
    <Container maxW="3xl">
      <VStack p={12} spacing={10}>
        <CheckCircleIcon w={48} h={48} color="green.600" />
        <Heading size="2xl">Super, alles fertig!</Heading>
        <Text fontSize="2xl" textAlign="center">
          Die Pflegedienste haben die Anfrage erhalten und werden diese nun auswerten. Sobald ein
          Pflegedienst eine Versorgung anbieten kann, wird dieser sich bei dir melden.
        </Text>
      </VStack>
    </Container>
  </Center>
);

export default Success;
