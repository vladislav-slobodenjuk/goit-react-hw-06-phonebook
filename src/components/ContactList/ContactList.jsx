import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
// import { filterContacts } from 'redux/actions';

import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactList(props) {
  // const { contacts, onDelete } = props;
  const dispatch = useDispatch();

  // уходит в файл с селекторами и оттуда импорт
  const getContacts = state => state.contacts.items;
  // const contacts = useSelector(getContacts);
  // console.log(contacts);
  //

  // уходит в файл с селекторами и оттуда импорт
  const getFilter = state => state.contacts.filter;
  // const filter = useSelector(getFilter);
  // console.log(filter);

  const FiltredContacts = state => {
    const contacts = getContacts(state);
    // console.log(contacts);
    const filter = getFilter(state);
    // console.log('filter', filter);

    const lowFilter = filter.toLowerCase();
    // console.log(contacts.items);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowFilter),
    );

    // это "сложный" селектор,
    // он уходит в файл с селекторами и оттуда импорт
  };

  const FiltredArray = useSelector(FiltredContacts);
  console.log(FiltredArray);

  return (
    <ul className={s.contactList}>
      {FiltredArray.map(({ name, number, id }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.contactName}>
            {name}: {number}
          </p>
          <button
            className={s.contactButton}
            type="button"
            // onClick={() => onDelete(name)}
            onClick={() => dispatch(deleteContact(name))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};
