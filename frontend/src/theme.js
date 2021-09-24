import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

const theme = extendTheme(
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
      body: 'Lato, sans-serif',
      heading: 'Lato, sans-serif',
    },
    colors: {
      brand: '#5A61AE',
    },
    styles: {
      global: props => ({
        body: {
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('white', 'gray.800')(props),
        },
      }),
    },
  },
  withDefaultColorScheme({colorScheme: 'brand'})
);

export default theme;
