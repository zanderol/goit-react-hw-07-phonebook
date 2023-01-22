import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectTheme, selectLoading, selectError } from 'redux/selectors';
import ContactsForm from 'components/Form';
import Loader from 'components/Loader';
import ThemeBtn from 'components/ThemeBtn';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { darkTheme, lightTheme } from 'components/ThemeBtn/theme';
import { ThemeProvider } from 'styled-components';
import {
  Container,
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
  Heading,
  StyledApp,
} from './App.styled';

const App = () => {
  const isDarkTheme = useSelector(selectTheme);
  const loading = useSelector(selectLoading);
  const isErr = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Container>
          <Global />

          <Heading>
            <FormTitle>Phonebook</FormTitle>
          </Heading>
          <ThemeBtn />
          <ContactsForm />
          <ContainerList>
            <ListTitle>Contacts</ListTitle>
            {fetchContacts().length > 0 ? (
              <Filter></Filter>
            ) : (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
            )}
            {loading && !isErr && <Loader />}
            {isErr && <div style={{ color: 'red' }}>loading error!</div>}
            <ContactList></ContactList>
          </ContainerList>
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
