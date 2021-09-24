import {Box, Flex, Spacer, Heading, Link, Button} from '@chakra-ui/react';
import {useLocation, Link as RouterLink} from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Box p={8} boxShadow="sm" w="100%" as="header">
      <Flex>
        <Heading size="lg">Zuhause in Münster</Heading>
        <Spacer />
        {location.pathname === '/' && (
          <Link as={RouterLink} to="/login" alignSelf="flex-end">
            <Button variant="outline">Login für Dienstleister</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
