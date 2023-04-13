import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Title } from 'shared/Title/Title';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';

const PhoneBook = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>

      <PhonebookForm />
      <PhonebookFilter />
      <PhonebookList />
    </Layout>
  );
};
export default PhoneBook;
