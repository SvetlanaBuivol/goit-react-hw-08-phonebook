
import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;