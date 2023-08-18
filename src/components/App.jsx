import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshCurrentUserAsync } from 'redax/auth/authOperations';
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUserAsync())
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      {/* 
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <ContactListContainer>
        <H2>Contacts</H2>
        <Filter />

        <ContactList />
      </ContactListContainer> */}
    </>
  );
}
