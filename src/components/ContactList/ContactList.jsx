import React from 'react';
import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
