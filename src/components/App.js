import React, { Component } from 'react';

import CompareAccounts from './CompareAccounts'
import StudentCards from './StudentCards'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <CompareAccounts />
        <hr />
        <StudentCards />
      </div>
    );
  }
}

export default App;
