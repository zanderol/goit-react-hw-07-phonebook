import React from 'react';
import { getContacts, getByFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getByFilter);
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  const getSortContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedValue)
    );
  };
  const sortedContacts = getSortContacts().sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      return (<ListItem key={id}></ListItem>
      ); })}
    </List>
  );
};

export default ContactList;
