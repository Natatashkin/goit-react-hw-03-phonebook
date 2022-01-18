import React from 'react';
import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <IconButton
              type="button"
              background="blue"
              aria-label="Button to delete contact"
              onClick={() => onClick(id)}
            >
              <FaTrashAlt />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
