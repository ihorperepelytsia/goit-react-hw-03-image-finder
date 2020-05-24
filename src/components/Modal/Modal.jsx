import React, { Component, createRef } from 'react';
import { Overlay, Modall } from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onCloseModal();
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <>
        <div
          className={Overlay}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
        >
          <div className={Modall}>
            <img src={largeImageURL} alt={tags} />
          </div>
        </div>
      </>
    );
  }
}
