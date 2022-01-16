import React from 'react';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => onClick(id)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
