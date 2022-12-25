import { useState } from 'react';
import { Contact } from '../../types/types';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactsForm.styled';

interface ContactsFormProps {
  setNewContact: (contact: Contact) => void;
  contacts: Array<Contact>;
}

const ContactsForm = ({ contacts, setNewContact }: ContactsFormProps) => {
  const [contactName, setContactName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'name') {
      setContactName(value);
      return;
    }
    setContactNumber(value);
  };

  const onSubmitAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingNames = contacts.map(el => el.name);

    if (existingNames.includes(contactName)) {
      alert(`${contactName} is already in contacts.`);
      return;
    }

    const newContact: Contact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    setNewContact(newContact);
    setContactName('');
    setContactNumber('');
  };

  return (
    <Form onSubmit={onSubmitAddContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={onChangeInput}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
          onChange={onChangeInput}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactsForm;
