import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redax/auth/authSelectors";

function PrivateRoute({ children, redirectTo }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
  
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;