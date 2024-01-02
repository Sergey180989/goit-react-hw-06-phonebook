
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';
import css from './ContactListItem.module.css';

export function ContactListItem({ name, number, buttonId }) {
  const dispatch = useDispatch();
  const handleDeleteContacts = event => {
    dispatch(deleteContact(event.target.id));
  };

  return (
    <li className={css.item}>
      {name}: <span>{number}</span>
      <button
        id={buttonId}
        onClick={handleDeleteContacts}
        className={css.buttonDelete}
      >
        Delete
      </button>
    </li>
  );
}

