import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/Contactlist';

import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export default function App() {
  const { contacts } = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </div>
  );
}