import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ list, onRemove }) {
  return (
    <ul className={s.list}>
      {list.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button id={id} className={s.button} onClick={onRemove}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDelete: PropTypes.func,
};
