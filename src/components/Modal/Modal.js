import React, { Component } from 'react';
import s from './Modal.module.css';
import {} from 'module';

export default class Modal extends Component {
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div className={s.modalBackdrop}>
        <div className={s.modalContent}>{this.props.children}</div>
      </div>
    );
  }
}
