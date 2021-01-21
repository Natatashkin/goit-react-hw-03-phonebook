import React, { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.modalBackdrop} onClick={this.handleBackDropClick}>
        <div className={s.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
