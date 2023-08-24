import { HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContactItem = styled(HStack)`
  padding: 12px;
  padding-left: 20px;
  color: #555;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background: #fff;
    outline: none;
    position: relative;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  :hover::after {
    content: '';
    position: absolute;
    background-color: transparent;
    bottom: 100%;
    right: 0;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 18px;
    box-shadow: 0 20px 0 0 #fff;
  }

  :hover::before {
    content: '';
    position: absolute;
    background-color: transparent;
    top: 38px;
    right: 0;
    height: 35px;
    width: 35px;
    border-top-right-radius: 18px;
    box-shadow: 0 -20px 0 0 #fff;
  }
  
`;


