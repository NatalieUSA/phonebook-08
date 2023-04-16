import { FormGroup, Label, Input } from './PhonebookFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/FilterSelectors';
import { setFilter } from 'redux/filter/FilterSlice';

export const PhonebookFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FormGroup>
      <Label></Label>
      <Input
        value={filter}
        name="filter"
        type="text"
        onChange={handleFilter}
        placeholder="find contacts by name"
        autoComplete="off"
      />
    </FormGroup>
  );
};
