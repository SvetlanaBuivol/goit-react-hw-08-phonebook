import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { ContactItem, DeleteBtn } from './Сontact.styled';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from 'redax/contacts/contactsOperetions';
import { Notify } from 'notiflix';
import EditModal from 'components/Modal/EditModal';
import { useDisclosure } from '@chakra-ui/react';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const removeContact = contactId => {
    dispatch(deleteContactAsync(contactId))
      .then(() => {
        Notify.success('Deleted', {
          position: 'center-top',
          clickToClose: true,
          timeout: 1500,
          success: {
            background: '#9dbc89df',
          },
        });
      })
      .catch(() => {
        Notify.failure('Somthing was wrong, try again', {
          position: 'center-top',
        });
      });
  };


  return (
    <ContactItem id={id}>
      <p>{name}</p>
      <div>
        <p>{number}</p>
        <DeleteBtn type="button" onClick={onOpen}><RiEdit2Line /></DeleteBtn>
        <EditModal isOpen={isOpen} onClose={onClose} contact={{id, name, number}} />
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          <RiDeleteBin6Line />
        </DeleteBtn>
      </div>
    </ContactItem>
  );
}

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
