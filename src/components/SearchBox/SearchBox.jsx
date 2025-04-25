import s from './SearchBox.module.css';
import { addFilter } from '../../redux/filtersSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const currentSearch = e.target.value;
    dispatch(addFilter(currentSearch));
  };

  const inputData = useSelector(state => state.filters.name);
  return (
    <div className={s.searchWrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={inputData}
          placeholder="Enter name or number..."
          name="search"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
