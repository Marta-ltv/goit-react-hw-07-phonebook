
import { Form, Label, Input, Button } from './ContactForm.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const formSubmit = e => {
    e.preventDefault();
    let result = true;
    contacts.forEach(elm => {
      if (elm.name === name) {
        alert(`${name} is already exist.`);
        resetForm();
        result = false;
      }
    });
    if (result) {
      dispatch(addContact({ name, phone }));
      resetForm();
    }
  };


  return (
    <Form onSubmit={formSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label  htmlFor="tel">
        Number
        <Input
          value={phone}
          onChange={handleChange}
          name="phone"
          placeholder="Number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}