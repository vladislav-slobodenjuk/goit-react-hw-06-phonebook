import PropTypes from 'prop-types';
import s from './Filter.module.scss';

import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/actions';
import { useSelector } from 'react-redux';

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch();

  // импортируется из файла с селекторами
  const getFilter = state => state.contacts.filter;
  const filter = useSelector(getFilter);
  // console.log(filter);

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={s.filterInput}
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
        // value={value}
        value={filter}
        // onChange={onChange}
        onChange={evt => dispatch(setContactsFilter(evt.target.value))}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
