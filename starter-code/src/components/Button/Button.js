import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button onClick={() => {this.props.handler(this.props.key)}}>{this.props.children}</button>
      </div>
    )
  }
}
