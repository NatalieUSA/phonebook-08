import { getFilteredContacts } from 'redux/contacts/ContactsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/ContactsOperations';

import { BsTelephone } from 'react-icons/bs';
import { List, ListItem, Btn } from './PhonebookList.styled';
import { Title } from 'shared/Title/Title';

export const PhonebookList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const isContacts = Boolean(filteredContacts.length);

  const contact = filteredContacts.map(({ id, name, number }) => (
    <ListItem key={id} c>
      {name}
      <BsTelephone /> {number}
      <Btn type="submit" onClick={() => removeContact(id)}>
        delete
      </Btn>
    </ListItem>
  ));

  const contactList = isContacts ? (
    <List>{contact}</List>
  ) : (
    <Title>No contacts in list</Title>
  );

  return contactList;
};
