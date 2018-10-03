import React, { Component } from 'react';
import Contacts from '../../contacts.json';
import './Contactmanager.css';
import Contact from '../Contact/Contact';
import Button from '../Button/Button';

export default class Contactmanager extends Component {
  state = {
    contacts: this.getInitialContacts(),
  }
  addRandomContact() {
    var contacts = this.state.contacts;
    contacts.push(Contacts[Math.floor(Math.random(0, Contacts.length)*Contacts.length)]);
    this.setState(contacts);
  }
  sortByName(){
    let contacts = this.state.contacts;
    contacts.sort((a, b) => {
      if(a.name > b.name) return 1;
      else if(a.name < b.name) return -1;
      else return 0;
    });
    this.setState(contacts);
  }
  sortByPopularity(){
    let contacts = this.state.contacts;
    contacts.sort((a, b) => {
      if( a.popularity > b.popularity ) return 1;
      else if(a.popularity < b.popularity) return -1;
      else return 0;
    });
    this.setState(contacts);
  }
  deleteUser = (key) => {
    var contacts = this.state.contacts;
    contacts.splice(key,1);
    this.setState(contacts);
  }
  getInitialContacts() {
    var contacts = [];
    for(let i=0; i<5; i++)
    {
      contacts.push(Contacts[i]);
    }
    return contacts;
  }
  render() {
    return (
      <div className="Contactmanager">
        <h1>IronContacts</h1>
        <div className="Buttons">
          <Button handler={() => {this.addRandomContact()}}>Add Random Contact</Button>
          <Button handler={() => {this.sortByName()}}>Sort by name</Button>
          <Button handler={() => {this.sortByPopularity()}}>Sort by popularity</Button>
        </div>
        <div className="container contact-wrapper">
          <div className="row contact-header">
            <div className="picture-header col-3">
              Picture
            </div>
            <div className="name-header col-5">
              Name
            </div>
            <div className="popularity-header col-4">
              Popularity
            </div>
          </div>
          {this.state.contacts.map((contact, key) => {
            return(<Contact name={contact.name} imageUrl={contact.pictureUrl} popularity={contact.popularity} key={key} deleteUser={this.deleteUser}/>);
          })}
        </div>
      </div>
    )
  }
}
