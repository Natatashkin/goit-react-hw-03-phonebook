import React from 'react';
import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';
import { List, Item, Name, Number } from './ContactList.styles';

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <IconButton
              type="button"
              background="blue"
              aria-label="Button to delete contact"
              onClick={() => onClick(id)}
            >
              <FaTrashAlt />
            </IconButton>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
