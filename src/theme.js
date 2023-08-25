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
      height: { base: '2.3rem', md: '2.8rem' },
      backgroundColor: 'customColor.100',
      color: 'customColor.300',
      fontSize: { base: 'xxs', md: 'xs' },
      fontWeight: '500',
      py: { base: '5px', md: '10px' },
      px: { base: '10px', md: '20px' },
      m: '0',
      mt: '24px',
      ml: 'auto',
      mr: 'auto',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      _hover: {
        backgroundColor: 'customColor.200',
        color: '#fff',
      },
    },
  },
});

const Input = defineStyleConfig({
  variants: {
    filled: {
      field: {
        height: { base: '2.5rem', md: '2.8rem', lg: '3rem' },
        fontSize: { base: 'xs', md: 'md' },
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
    flushed: {
      field: {
        color: 'customColor.500',
        fontSize: { base: 'sm', md: 'md' },
        height: { base: '2.5rem', md: '2.8rem', lg: '3rem' },
        _hover: {
          borderColor: 'white',
        },
        _focusVisible: {
          borderColor: 'white',
          boxShadow: 'none',
        },
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
      fill: '#f15a24',
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

export const mainGridItem = {};

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
  mt: { base: '8px', md: '10px' },
  mmb: '16px',
  backgroundImage: 'linear-gradient(70deg, #d6d6d6, #fcfbfb)',
};

export const iconBtn = {
  color: 'customColor.300',
  backgroundColor: 'customColor.100',
  borderRadius: '4px',
  _hover: {
    backgroundColor: 'customColor.200',
    color: '#fff',
  },
};

export const contactBox = {
  w: { base: '130px', md: '190px', lg: '240px' },
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: { base: 'xxs', md: 'xs', lg: 'sm' },
};

export const iconBtnBox = {
  display: 'flex',
  gap: { base: '6px', lg: '12px' },
  zIndex: 100,
};

export const userMenu = {
  gap: { base: '8px', md: '16px' },
  alignItems: 'center',
  flexDirection: { base: 'row', md: 'column' },
};

export const userText = {
  fontSize: { base: 'xxs', md: 'xs', lg: 'xs' },
  fontWeight: '500',
  color: 'customColor.500',
  textAlign: 'center',
};

export const filterInput = {
  w: { base: '185px', md: '230px', lg: '400px' },
  mx: 'auto',
};

export const navLinkActive = {
  _active: {
    color: '#f15a24',
  },
};

export const textForm = {
  textAlign: 'center',
  mt: '6px',
  fontSize: 'xxs',
  color: 'customColor.400',
  a: {
    color: '#f15a24',
  },
};

export const container = {
  maxWidth: '100%',
  py: { base: '24px', md: '50px' },
  px: '20px',
};
