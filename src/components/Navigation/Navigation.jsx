import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redax/auth/authSelectors';
import { navList } from 'theme';
import { NavLinkStyled } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <List sx={navList}>
      <ListItem>
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </ListItem>
      )}
    </List>
  );
}

export default Navigation;
