import {
  Box,
  Flex,
  Spacer,
  Heading,
  Link,
  Button,
  HStack,
  Image,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import {useLocation, Link as RouterLink} from 'react-router-dom';

import Logo from '../../img/WhoCaresLogoV2.png';

const Header = () => {
  const location = useLocation();

  return (
    <Box p={8} boxShadow="md" w="100%" as="header">
      <Flex>
        <LinkBox>
          <HStack spacing={6}>
            <Link as={RouterLink} to="/" alignSelf="center">
              <LinkOverlay>
                <Image src={Logo} boxSize="24" />
              </LinkOverlay>
            </Link>
            <Heading size="lg" textDecoration="none">
              Zuhause in Münster
            </Heading>
          </HStack>
        </LinkBox>
        <Spacer />
        {location.pathname === '/' && (
          <Link as={RouterLink} to="/login" alignSelf="center">
            <Button variant="outline" color="green.600">
              Login für Dienstleister
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
