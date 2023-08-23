import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   colors: {
//     customColor: {
//       50: '#ddd',
//       100: '#ccc',
//       200: '#999',
//       300: '#666',
//       400: '#555',
//     },
//   },
//   components: {
//     Button: {
//       bg: 'customColor.100',
//       color: 'customColor.300',
//     },
//   },

// });
const colors = {
  customColor: {
    50: '#ddd',
    100: '#ccc',
    200: '#999',
    300: '#666',
    400: '#555',
  },
};

const fontSizes = {
  sm: '1.2em',
  md: '1.5em',
  lg: '1.75em',
};

const breakpoints = {
  sm: '280px',
  md: '480px',
  lg: '768px',
  xl: '1200px',
};

// const components = {
//   Button: {
//     variants: {
//       myBtn: {
//         backgroundColor: '#ccc',
//         color: '#666',
//         fontSize: '1.1em',
//         fontWeight: '400',
//         py: '10px',
//         px: '20px',
//         m: '0',
//         border: 'none',
//         borderRadius: '5px',
//         transition: 'background-color 0.3s ease, color 0.3s ease',
//         _hover: {
//           backgroundColor: '#999',
//           color: '#fff',
//         },
//       },
//     },
//   },
//   Input: {
//     variants: {
//       csInput: {
//             outline: 'solid',
//           color: 'red',
//       },
//     },
//   },
// };

const Button = defineStyleConfig({
  variants: {
    myBtn: {
      backgroundColor: '#ccc',
      color: '#666',
      fontSize: '1.1em',
      fontWeight: '400',
      py: '10px',
      px: '20px',
      m: '0',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      _hover: {
        backgroundColor: '#999',
        color: '#fff',
      },
    },
  },
});

const Input = defineStyleConfig({
  variants: {
    filled: {
      field: {
        bg: 'customColor.50',
        _hover: {
          bg: 'customColor.100',
        },
        _focusVisible: {
          bg: 'customColor.100',
        },
        outline: 'none',
        border: 'none',
      },
    },
  },
});

export const theme = extendTheme({
  colors,
  fontSizes,
  breakpoints,
  components: { Button, Input },
});
