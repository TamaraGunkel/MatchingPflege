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
      green: {
        50: '#dcffec',
        100: '#afffcf',
        200: '#7effb1',
        300: '#4dff94',
        400: '#21ff76',
        500: '#0de65d',
        600: '#00b347',
        700: '#008032',
        800: '#004d1d',
        900: '#001c04',
      },
    },

    /*styles: {
      global: props => ({
        body: {
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('white', 'gray.800')(props),
        },
      }),
    },*/
  },
  withDefaultColorScheme({colorScheme: 'green'})
);

export default theme;
