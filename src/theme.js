import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const colors = {
  customColor: {
    50: '#ddd',
    100: '#ccc',
    200: '#999',
    300: '#666',
    400: '#555',
    500: '#444',
  },
};

const fontSizes = {
  xxs: '1em',
  xs: '1.2em',
  sm: '1.3em',
  md: '1.5em',
  lg: '1.75em',
};

const breakpoints = {
  sm: '280px',
  md: '480px',
  lg: '768px',
  xl: '1200px',
};

const Button = defineStyleConfig({
  variants: {
    myBtn: {
      display: 'block',
      height: '2.8rem',
      backgroundColor: '#ccc',
      color: '#666',
      fontSize: 'xs',
      fontWeight: '400',
      py: '10px',
      px: '20px',
      m: '0',
      mt: '24px',
      ml: 'auto',
      mr: 'auto',
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
        height: '3rem',
        fontSize: 'md',
        color: 'customColor.500',
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

// COMMON styles //

export const hoverIcon = {
  _hover: {
    svg: {
      transform: 'scale(1.2)',
      fill: 'customColor.300',
      transition: 'transform 0.250s ease',
    },
  },
};

export const inputLeftEl = {
  pointerEvent: 'none',
  height: '100%',
};

export const formLabel = {
  fontSize: { base: 'xxs', md: 'xs', lg: 'md' },
  color: 'customColor.300',
  mb: '4px',
};

export const formHeader = {
  fontSize: { sm: 'xs', md: 'lg', lg: '2.25rem' },
  color: 'customColor.500',
  mb: '8px',
  textAlign: 'center',
};

export const navGridItem = {
  display: 'flex',
  flexDirection: { sm: 'row', md: 'column' },
  alignItems: 'center',
  justifyContent: { base: 'space-between', md: 'space-around' },
  bg: 'customColor.50',
  minHeight: { md: '100vh', lg: '100vh' },
  p: { sm: '15px', lg: '36px' },
};

export const mainGridItem = {
  py: '60px',
  px: '20px',
};

export const navList = {
  fontSize: { base: 'xxs', md: 'xs', lg: 'sm' },
  fontWeight: '500',
  color: 'customColor.500',
  gap: '20px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: { base: 'flex', md: 'column' },
};

export const contactList = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '700px',
  pt: '20px',
  pb: '20px',
  pl: '30px',
  height: '100hv',
  ml: 'auto',
  mr: 'auto',
  mmb: '16px',
  backgroundImage: 'linear-gradient(70deg, #d6d6d6, #fcfbfb)',
}

export const iconBtn = {
  color: 'customColor.300',
  backgroundColor: 'customColor.100',
  borderRadius: '4px',
  _hover: {
    backgroundColor: 'customColor.200',
    color: '#fff',
  },
}
