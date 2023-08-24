import React from 'react';
import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redax/filter/filterSelectors';
import { useEffect } from 'react';
import { fetchContactsAsync } from 'redax/contacts/contactsOperetions';
import { Notify } from 'notiflix';
import Filter from 'components/Filter/Filter';
import { List, Text } from '@chakra-ui/react';
import { contactList, userText } from 'theme';

function ContactList() {
  const filteredcontacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync()).catch(() => {
      Notify.failure('Somthing was wrong, refresh the page', {
        position: 'center-top',
      });
    });
  }, [dispatch]);

  return (
    <List sx={contactList}>
      {filteredcontacts.length && <Filter />}
      {filteredcontacts.length !== 0 ? (
        filteredcontacts.map(({ name, number, id }) => {
          return <Contact key={id} name={name} number={number} id={id} />;
        })
      ) : (
        <Text sx={userText}>Contact list is empty</Text>
      )}
    </List>
  );
}

export default ContactList;
