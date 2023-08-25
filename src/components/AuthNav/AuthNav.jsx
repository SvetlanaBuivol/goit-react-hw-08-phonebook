import { List, ListItem } from '@chakra-ui/react';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';
import { navList } from 'theme';

function AuthNav() {
  return (
    <nav>
      <List sx={navList}>
        <ListItem>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/login">Log in</NavLinkStyled>
        </ListItem>
      </List>
    </nav>
  );
}

export default AuthNav;
