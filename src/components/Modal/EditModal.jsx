import { Button, Input, Modal } from 'antd';
import { Notify } from 'notiflix';
import { useState } from 'react';

import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContactAsync } from 'redax/contacts/contactsOperetions';

const modalRoot = document.querySelector('#modal-root');

function EditModal({ visible, onCancel, contact }) {
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
    onCancel();
  };

  return createPortal(
    <Modal
      open={visible}
      title="Edit Contact"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Input value={name} onChange={e => setName(e.target.value)} />
      <Input value={number} onChange={e => setNumber(e.target.value)} />
    </Modal>,
    modalRoot
  );
}

export default EditModal;
