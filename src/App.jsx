import { Form } from 'components/Form';
import { FilteredItem } from 'components/FilteredItem';
import { ContactsList } from 'components/ContactsList';
import { Container } from 'App.styled';

export const App = () => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2> Contacts</h2>
      <FilteredItem />
      <ContactsList />
    </Container>
  );
};
