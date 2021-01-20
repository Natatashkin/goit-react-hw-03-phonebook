import s from './Form.module.css';

import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NAME_ID = uuidv4();
const NUMBER_ID = uuidv4();

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={NAME_ID} className={s.label}>
          Name
          <input
            key={NAME_ID}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor={NUMBER_ID} className={s.label}>
          Number
          <input
            key={NUMBER_ID}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
