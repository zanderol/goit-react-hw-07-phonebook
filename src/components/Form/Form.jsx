import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onIdCreate = () => {
    let id = nanoid(6);
    return id;
  };

  const SubmitForm = e => {
    e.preventDefault();
    let contact = {
      id: onIdCreate(),
      name: name,
      number: number,
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

  const InputChange = e => {};

  const DefaultValue = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={SubmitForm}>
        <LabelForm>Name</LabelForm>
        <LabelInput></LabelInput>

        <LabelForm>Number</LabelForm>
        <LabelInput></LabelInput>

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </>
  );
}
