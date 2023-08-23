
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { navList } from "theme";

function AuthNav() {
  return (
    <nav>
      <List sx={navList}>
        <ListItem>
          <NavLink to='/register'>Register</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to='/login'>Log in</NavLink>
        </ListItem>
      </List>
    </nav>
  );
}

export default AuthNav;