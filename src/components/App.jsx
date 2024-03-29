import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';

export function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>The Phonebook is empty. Please add a new contact.</p>
      )}
    </div>
  );
}
