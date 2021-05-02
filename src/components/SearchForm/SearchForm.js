import React, { Component } from 'react';
import Style from './SearchForm.module.css';

class SearchForm extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
        <form className={Style.form} onSubmit={this.handleSubmit}>
            <input
            className=""
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={this.handleChange}
            />
            <button type="submit" className="">
            <span className="">Search</span>
            </button>
        </form>
    );
  }
}

export default SearchForm;