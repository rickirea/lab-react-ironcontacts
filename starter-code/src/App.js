import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      contacts: this.props.contacts
    }
    
    this.addRandomCard = this.addRandomCard.bind(this);
    this.orderByName = this.orderByName.bind(this);
    this.orderByPopularity = this.orderByPopularity.bind(this);
  }

  handleClick = (contactChild) => {
    const copyContacts = this.state.contacts;
    
    copyContacts.forEach((contact) =>{
      if(contactChild === contact)
      {
        contact.show = false;
      }
    })
    
    this.setState({ contacts: copyContacts})
    //console.log(index);
  }

  addRandomCard(){
   
    var notShowcontacts = this.state.contacts.filter((contact) => !contact.show);

    if(notShowcontacts.length != 0)
    {
      var randomNumber = Math.random();           
      randomNumber = randomNumber * notShowcontacts.length; 
      randomNumber = Math.floor(randomNumber);     

      console.log("random:" + randomNumber);

      var contactToAdd = notShowcontacts[randomNumber];
      console.log("contactToAdd: " + contactToAdd.name);
      var copyContacts = this.state.contacts;

      copyContacts.forEach((contact) =>{
        if(contactToAdd === contact)
        {
          contact.show = true;
        }
      })

      this.setState(prevState => ({
        contacts: copyContacts
      }));
    }
  }

  orderByName(){
    var copyContacts = this.state.contacts;

    copyContacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    this.setState(prevState => ({
      contacts: copyContacts
    }));
  }

  orderByPopularity(){
    var copyContacts = this.state.contacts;

    copyContacts.sort(function (a, b) {
      if (parseFloat(a.popularity) > parseFloat(b.popularity)) {
        return -1;
      }
      if (parseFloat(a.popularity) < parseFloat(b.popularity)) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    this.setState(prevState => ({
      contacts: copyContacts
    }));
  }

  render() {
    let contacts = this.state.contacts.filter((contact) => contact.show);;

    return (
      <div className="App">
        <div className="main-container">
          <button className="button is-success card-button" onClick={this.addRandomCard}>
            Add Contact
          </button>
          <button className="button is-info card-button" onClick={this.orderByName}>
            Sort by Name
          </button>
          <button className="button is-info card-button" onClick={this.orderByPopularity}>
            Sort by Popularity
          </button>
        </div>
        <div className="card-contact-container">
          {contacts.map((element, index) =>{
            return <Card contact={element} key={index} handleClick={this.handleClick}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
