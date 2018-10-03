import React, { Component } from 'react';
import './Contact.css';
import Button from '../Button/Button';

export default class Contact extends Component {
  render() {
    return (
      <div className="row Contact">
        <div className="image col-3">
          <img src={this.props.imageUrl} alt={this.props.name} />
        </div>
        <div className="name col-4">
          {this.props.name}
        </div>
        <div className="popularity col-3">
          {this.props.popularity.toFixed(2)}
        </div>
        <div className="delete col-2">
          <Button handler={() => {this.props.deleteUser(this.props.index)}}>Delete</Button>
        </div>
      </div>
    )
  }
}
