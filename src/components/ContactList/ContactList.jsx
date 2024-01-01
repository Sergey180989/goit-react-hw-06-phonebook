import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'components/redux/selectors';

export function ContactList() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {getFilteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} buttonId={id} />
      ))}
    </ul>
  );
}
