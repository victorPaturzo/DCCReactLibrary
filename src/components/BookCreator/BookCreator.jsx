import React, { Component } from 'react';
import './BookCreator.css';

class BookCreator extends Component {

    constructor(props) {
      super(props);
      this.state = {
            name: '',
            author: '',
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form>
            <label>Book Name</label>
            <input />
            <label>Author</label>
            <input />
            <button type="submit">Create Book</button>
        </form>
      );
    }
}

export default BookCreator;