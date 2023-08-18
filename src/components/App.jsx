import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshCurrentUserAsync } from 'redax/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUserAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register"  element={<PublicRoute restricted redirectTo='/contacts'><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute restricted redirectTo='/contacts'><Login/></PublicRoute>} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/register">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
