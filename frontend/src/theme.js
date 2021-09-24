import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Lato, sans-serif',
  },
});
export default theme;
