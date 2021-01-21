import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Modal from './components/Modal/Modal';
import s from './components/Modal/Modal.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
    textModal: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  addContact = data => {
    const { contacts } = this.state;
    if (data.name === '' || data.number === '') {
      this.toggleModal();
      this.setState({
        textModal: 'Все поля формы должны быть заполнены!',
      });
      // alert(`Все поля формы должны быть заполнены!`);
      return;
    }

    if (contacts.find(({ name }) => name === data.name)) {
      this.toggleModal();
      this.setState({
        textModal: `Контакт с именем ${data.name} уже существует!`,
      });
      // alert(`Контакт с именем ${data.name} уже существует!`);
      return;
    }
    const newContact = { id: uuidv4(), name: data.name, number: data.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
        )
      : contacts;
  };

  handleFilterChangeInput = event => {
    const filter = event.target.value;
    console.log(filter);
    this.setState({ filter });
  };

  onRemove = event => {
    console.log(event.target.id);
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== event.target.id),
        ],
      };
    });
  };

  render() {
    const { filter, contacts, showModal, textModal } = this.state;
    return (
      <div className="container">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {textModal}
            <button
              type="button"
              className={s.modalButton}
              onClick={this.toggleModal}
            >
              Ок!
            </button>
          </Modal>
        )}
        <Section title="Phonebook">
          <Form onSubmitForm={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 2 && (
            <Filter value={filter} onFilter={this.handleFilterChangeInput} />
          )}
          <ContactList list={this.handleFilter()} onRemove={this.onRemove} />
        </Section>
      </div>
    );
  }
}
