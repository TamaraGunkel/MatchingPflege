import {Center, VStack, Heading, Text} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';

const Success = () => (
  <Center>
    <VStack p={12} spacing={10} w="3xl">
      <CheckCircleIcon w={48} h={48} color="green.400" />
      <Heading size="2xl">Super, alles fertig!</Heading>
      <Text fontSize="2xl">
        Die Pflegedienste haben die Anfrage erhalten und werden diese nun auswerten. Sobald ein
        Pflegedienst eine Versorgung anbieten kann, wird dieser sich bei dir melden.
      </Text>
    </VStack>
  </Center>
);

export default Success;
