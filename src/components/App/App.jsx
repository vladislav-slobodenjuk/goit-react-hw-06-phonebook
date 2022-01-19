import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setContacts } from 'redux/actions';
// import { setContactsFilter } from 'redux/actions';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import s from './App.module.scss';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Vladislav Sl', number: '555-77-58' },
// ];

export default function App() {
  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');

  //  два селектора уходят в файл с селекторами
  // и импортируются сюда
  const getFilter = state => state.contacts.filter;
  const filter = useSelector(getFilter);

  const getContacts = state => state.contacts.items;
  const contacts = useSelector(getContacts);

  // эти две и юзэффекты остаются
  const dispatch = useDispatch();
  const localStorageKey = 'contacts';

  useEffect(() => {
    const isStorageContacts = localStorage.getItem(localStorageKey);
    const storageContacts = JSON.parse(isStorageContacts);

    if (isStorageContacts) {
      // setContacts(storageContacts);
      dispatch(setContacts(storageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    // уже реализовано в редюсере
    const isAdded = Object.values(contacts).find(
      contact => contact.name === data.name,
    );

    if (isAdded) {
      alert('contact is added');
      return;
    }
    setContacts(contacts => [...contacts, data]);
  };

  const setContactsFilterOld = data => {
    console.log(data);
    // dispatch(setContactsFilter(data));
    // setFilter(data.target.value);

    // уже не нужна, реализовал прямо в фильтр
  };

  const filterContacts = () => {
    const lowFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowFilter),
    );
    // эта функция вместе с const на строке 83 заменяется
    // на селектор, к-й импортируется прямо в компонент Filter
  };
  const filteredContacts = filterContacts();

  const deleteContact = name => {
    const restContacts = contacts.filter(contact => contact.name !== name);

    setContacts(restContacts);
    // уже реализовано в редюсере
  };

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={setContactsFilterOld} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
