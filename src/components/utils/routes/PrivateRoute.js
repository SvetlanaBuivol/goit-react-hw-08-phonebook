import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redax/auth/authSelectors";

function PrivateRoute({ component: Component, redirectTo }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
  
    return isLoggedIn ? <Component/> : <Navigate to={redirectTo} />;
}

export default PrivateRoute;