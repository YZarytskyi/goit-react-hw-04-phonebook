import { useEffect, useState } from 'react';
import { Contact } from '../types/types';
import ContactsList from './ContactsList/ContactsList';
import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import { ContactsTitle, PageTitle } from './App.styled';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const CONTACTS_KEY = 'Contacts';

const App = () => {
  const [contacts, setContacts] = useState<Array<Contact>>(() => {
    const savedContacts = localStorage.getItem(CONTACTS_KEY);
    const parsedContacts: Array<Contact> =
      savedContacts && JSON.parse(savedContacts);
    return parsedContacts ?? contactsData;
  });
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const setNewContact = (contact: Contact) => {
    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <PageTitle>Phonebook</PageTitle>
      <ContactsForm setNewContact={setNewContact} contacts={contacts} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} filterContacts={filterContacts} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
