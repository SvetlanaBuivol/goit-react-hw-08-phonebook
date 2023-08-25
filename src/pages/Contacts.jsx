import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import MainContainer from 'components/MainContainer/MainContainer';

function Contacts() {
  return (
    <MainContainer>
      <ContactForm />
      <ContactList />
    </MainContainer>
  );
}

export default Contacts;
