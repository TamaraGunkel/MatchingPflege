import {
  Container,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Heading,
  Link,
} from '@chakra-ui/react';
import {AtSignIcon, EmailIcon, UnlockIcon} from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';

const LoginForm = () => (
  <Container as="main" maxW="3xl" rounded="md" shadow="xs" p={10}>
    <VStack spacing={4}>
      <Heading>Login für Dienstleister</Heading>
      <InputGroup>
        <InputLeftElement>
          <AtSignIcon />
        </InputLeftElement>
        <Input type="email" placeholder="E-Mail Adresse" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement>
          <UnlockIcon />
        </InputLeftElement>
        <Input type="password" placeholder="Passwort" />
      </InputGroup>
      <Link as={RouterLink} to="/inquiries" alignSelf="flex-end">
        <Button leftIcon={<EmailIcon />} variant="solid">
          Einloggen
        </Button>
      </Link>
    </VStack>
  </Container>
);

export default LoginForm;
