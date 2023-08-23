import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redax/auth/authSelectors';
import { navList } from 'theme';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <List sx={navList}>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <NavLink to="/contacts">Contacts</NavLink>
        </ListItem>
      )}
    </List>
  );
}

export default Navigation;
