import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector(state => state.theme);

  const contacts = useSelector(getContacts);

  return (
    <>
      <Container></Container>
    </>
  );
};

export default App;
