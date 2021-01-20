import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import s from './Filter.module.css';

const FILTER_ID = uuidv4();
const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <label htmlFor={FILTER_ID}>Find contacts by name</label>
      <input name="filter" value={value} onChange={onFilter} id={FILTER_ID} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
