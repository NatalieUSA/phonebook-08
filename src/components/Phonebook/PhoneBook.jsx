import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Title } from 'shared/Title/Title';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
// import { selectLoading } from 'redux/contacts/ContactsSelector';
import { fetchContacts } from 'redux/contacts/ContactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const PhoneBook = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>

      <PhonebookForm />
      <PhonebookFilter />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <PhonebookList />
    </Layout>
  );
};
export default PhoneBook;
