import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, UserListPage, Board } from './Pages/index.js';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserListPage} />
      <Route path="/posts" component={Board} />
    </div>
  );
}

export default App;
