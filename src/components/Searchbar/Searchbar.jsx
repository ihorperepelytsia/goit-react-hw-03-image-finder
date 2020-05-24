import React, { Component } from 'react';
import { error } from '@pnotify/core';
import '@pnotify/core/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import {
  Searchbar as Searchbarr,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.length <= 1) {
      error({
        text: 'Enter more information',
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={Searchbarr}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchFormBtn}>
            <span className={SearchFormBtnLabel}>Search</span>
          </button>

          <input
            className={SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
