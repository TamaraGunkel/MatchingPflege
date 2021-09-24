import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react';

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
  },
  withDefaultColorScheme({colorScheme: 'brand'})
);

export default theme;
