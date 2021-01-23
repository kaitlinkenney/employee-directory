// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import TableContainer from './components/TableContainer';
// import Search from './components/Search';

class App extends Component {


  render() {
  return (
    <div className="Dir">
      <div className="container">
        <Header />
        {/* <Search /> */}
        <TableContainer />
      </div>
    </div>
  );
  }
}

export default App;