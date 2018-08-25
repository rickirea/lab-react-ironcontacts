import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import contacts from './contacts.json';

contacts.forEach((element, index) => {
  var showInitial = true;
  if(index >= 5)
  {
    showInitial = false;
  }

  element.show = showInitial;
});

//console.log(contacts);

ReactDOM.render(
  <App contacts={contacts} />, 
  document.getElementById('root')
);

registerServiceWorker();
