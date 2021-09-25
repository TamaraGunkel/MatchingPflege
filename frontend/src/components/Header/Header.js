import {Box, Flex, Spacer, Heading, Link, Button, HStack, Image} from '@chakra-ui/react';
import {useLocation, Link as RouterLink} from 'react-router-dom';

import Logo from '../../img/WhoCaresLogoV2.png';

const Header = () => {
  const location = useLocation();

  return (
    <Box p={8} boxShadow="sm" w="100%" as="header">
      <Flex>
        <HStack spacing={6}>
          <Image src={Logo} boxSize="24" />
          <Heading size="lg">Zuhause in Münster</Heading>
        </HStack>
        <Spacer />
        {location.pathname === '/' && (
          <Link as={RouterLink} to="/login" alignSelf="center">
            <Button variant="outline">Login für Dienstleister</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
