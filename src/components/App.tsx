import { Component } from 'react';
import { Contact } from '../types/types';
import ContactsList from './ContactsList/ContactsList';
import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import { ContactsTitle, PageTitle } from './App.styled';

export interface AppState {
  contacts: Array<Contact>;
  filter: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  setNewContact = (contact: Contact) => {
    this.setState(prev => ({
      contacts: [contact, ...prev.contacts],
    }));
  };

  deleteContact = (id: string) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <div>
        <PageTitle>Phonebook</PageTitle>
        <ContactsForm
          setNewContact={this.setNewContact}
          contacts={this.state.contacts}
        />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          filter={this.state.filter}
          filterContacts={this.filterContacts}
        />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
