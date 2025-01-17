/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/list';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container-fluid">
    <nav className="navbar sticky-top navbar-light bg-dark">
      <h1 className="navbar-brand text-light">MovieList</h1>
    </nav>

    <List />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
