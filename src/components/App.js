import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import AppForm from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

const PhonebookApp = styled.div`
  margin: 25px auto;
  min-width: 400px;
  max-width: 500px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
`;

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    // если в localStorage ничего нет, тогда parsedTodos вернёт null и сломается вся логика, потому нужно условие
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts }); // записываем поверх, так как в начальном стойте пустые значения
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = formValues => {
    const { name, number } = formValues;
    const newName = this.checkUniqueName(name);
    const formatedNumber = this.numberFormatting(number);

    if (newName) {
      toast.error(`Name ${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number: formatedNumber,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    toast.success(`${name} was added to contacts!`);
  };

  checkUniqueName = newName => {
    const normalyzeName = newName.toLocaleLowerCase();
    const { contacts } = this.state;

    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName,
    );
  };

  numberFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 3) {
      array.splice(i, 0, '-');
    }
    console.log();
    return array.join('');
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div>
        <AppForm getSubmitData={this.addContact} />
        <Filter
          value={filter}
          onChange={this.handleFilterChange}
          onClick={this.resetFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onClick={this.handleDeleteContact}
        />
        <Toaster />
      </div>
    );
  }
}
