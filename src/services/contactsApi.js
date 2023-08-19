import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

export const fetchContacts = () => axios.get('/contacts');

export const addContact = contact =>
  axios.post('/contacts', contact);

export const deleteContact = contactId =>
  axios.delete(`/contacts/${contactId}`);

export const editContact = ({id, name, number}) => axios.patch(`/contacts/${id}`, {name, number});

  // auth //

export const signUp = credentials => axios.post('/users/signup', credentials);

export const logIn = credentials => axios.post('/users/login', credentials);

export const logOut = () => axios.post('/users/logout');

export const currentUser = () => axios.get('/users/current');

