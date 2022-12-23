import { Contact } from '../../types/types';
import { Button, Li } from './ContactsListItem.styled';

interface ContactsListItemProps {
  contact: Contact;
  deleteContact: (id: string) => void;
}

const ContactsListItem: React.FC<ContactsListItemProps> = ({
  contact,
  deleteContact,
}) => {
  const onClickDelete = (id: string) => {
    deleteContact(id);
  };

  return (
    <Li>
      <p>
        {contact.name} {contact.number}
      </p>
      <Button type="button" onClick={() => onClickDelete(contact.id)}>
        Delete
      </Button>
    </Li>
  );
};

export default ContactsListItem;
