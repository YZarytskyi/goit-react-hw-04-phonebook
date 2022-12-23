import { Contact } from '../../types/types';
import ContactsListItem from './ContactsListItem';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 3rem;
`;

const Warning = styled.p`
  padding-left: 3rem;
`;

interface ContactsListProps {
  contacts: Array<Contact>;
  filter: string;
  deleteContact: (id: string) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  filter,
  deleteContact,
}) => {
  const filteredList = contacts.filter(contact => {
    const normalizeName = contact.name.trim().toLowerCase();
    const normalizeFilter = filter.trim().toLowerCase();
    return normalizeName.includes(normalizeFilter);
  });

  if (!filteredList.length) {
    return (
      <Warning>Contacts not found</Warning>
    )
  }

  return (
    <Ul>
      {filteredList.map(contact => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </Ul>
  );
};

export default ContactsList;
