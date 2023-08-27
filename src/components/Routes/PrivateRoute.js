import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getRefreshingUser } from 'redax/auth/authSelectors';

function PrivateRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

export default PrivateRoute;
