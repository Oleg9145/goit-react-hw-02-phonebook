import { ContactListItem } from './ContactlistItem';
import css from './style/ContactListItem.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export { ContactList };
