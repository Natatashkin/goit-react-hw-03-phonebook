import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import AppForm from './Form';
import Section from './Section';
import Filter from './Filter';
import ContactList from './ContactList';

const AppSyles = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing(5)} auto;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const AppTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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

  handleDeleteContact = async itemId => {
    const { contacts } = this.state;
    const item = contacts.find(({ id }) => id === itemId);

    Promise.resolve(
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== itemId),
      })),
    ).then(toast.success(`contact ${item.name} was delete!`));
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    const { title } = this.props;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <AppSyles>
        <AppTitle>{title}</AppTitle>
        <Section>
          <AppForm getSubmitData={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={this.handleFilterChange}
            onClick={this.resetFilter}
          />
          <ContactList
            contacts={filteredContacts}
            onClick={this.handleDeleteContact}
          />
        </Section>
        <Toaster />
      </AppSyles>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
};
