import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/slice';
import css from './Filter.module.css';

export function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onFilterChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
