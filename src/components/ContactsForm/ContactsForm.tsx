import { Component } from 'react';
import { Contact } from '../../types/types';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactsForm.styled';

interface ContactsFormProps {
  setNewContact: (contact: Contact) => void;
  contacts: Array<Contact>;
}

interface ContactsFormState {
  name: string;
  number: string;
}


export default class ContactsForm extends Component<
  ContactsFormProps,
  ContactsFormState
> {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmitAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingNames = this.props.contacts.map(el => el.name);

    if (existingNames.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return
    }

    const newContact: Contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.setNewContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitAddContact}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onChangeInput}
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
            value={this.state.number}
            onChange={this.onChangeInput}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
