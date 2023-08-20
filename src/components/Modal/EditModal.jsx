// import { Button, Input, Modal } from 'antd';
import { Notify } from 'notiflix';
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContactAsync } from 'redax/contacts/contactsOperetions';
import { inputStyles } from './styles';

const modalRoot = document.querySelector('#modal-root');

function EditModal({ isOpen, onClose, contact }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSave = () => {
    if (name === '' || number === '') {
      Notify.failure('Fields can not be empty. Please, enter some value', {
        position: 'center-top',
      });
      return;
    }

    dispatch(editContactAsync({ id: contact.id, name, number }))
      .then(() => {
        Notify.success('Updated', {
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
    onClose();
  };

  return createPortal(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(2px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Edit Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              {...inputStyles}
              variant="filled"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Number</FormLabel>
            <Input
              {...inputStyles}
              variant="filled"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,
    modalRoot
  );
}

export default EditModal;
