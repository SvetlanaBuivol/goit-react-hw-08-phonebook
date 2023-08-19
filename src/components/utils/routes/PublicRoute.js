import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redax/auth/authSelectors";

function PublicRoute({children, restricted=false, redirectTo}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    console.log("PublicRoute  shouldRedirect", shouldRedirect)

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;