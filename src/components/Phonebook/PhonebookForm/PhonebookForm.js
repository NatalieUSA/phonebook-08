import { useState } from 'react';

import { initialState } from './initialState';
import { FormGroup, Input, Label } from './PhonebookForm.styled';
import { FormBtn } from './PhonebookForm.styled';

import { useDispatch } from 'react-redux';

import { fetchAddContact } from 'redux/contacts/ContactsOperations';

export const PhonebookForm = () => {
  const [state, setState] = useState({ ...initialState });

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label></Label>
        <Input
          onChange={handleChange}
          placeholder="enter number"
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormBtn type="submit" onSubmit={handleAddContact}>
          Add contact
        </FormBtn>
      </FormGroup>
    </form>
  );
};
