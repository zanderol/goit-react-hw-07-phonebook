import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Form, LabelInput, ButtonSubmit } from './Form.styled';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const SubmitForm = e => {
    e.preventDefault();
    let contact = {
      name: name,
      number: number,
      email: email,
    };
    const someCopyItem = contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (someCopyItem) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(contact));
    DefaultValue();
  };

  const InputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const DefaultValue = () => {
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <>
      <Form onSubmit={SubmitForm}>
        {/* <LabelForm>Name</LabelForm> */}
        <LabelInput
          placeholder="Name"
          value={name}
          type="text"
          name="name"
          onChange={InputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></LabelInput>

        {/* <LabelForm>Number</LabelForm> */}
        <LabelInput
          placeholder="Number"
          value={number}
          type="tel"
          name="number"
          onChange={InputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></LabelInput>

        {/* <LabelForm>Email</LabelForm> */}
        <LabelInput
          placeholder="Email"
          value={email}
          type="email"
          name="email"
          onChange={InputChange}
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Email address must contain the '@' symbol For example dmytrolevchenko22@gmail.com"
        ></LabelInput>

        <ButtonSubmit type="submit" disabled={!name || !number}>
          Add contact
        </ButtonSubmit>
      </Form>
    </>
  );
}
