import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, UserListPage, UserInfoPage, UserTodoPage, Board } from './Pages';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserListPage} />
      <Route exact path="/posts" component={Board} />
      <Route exact path="/users/:id" component={UserInfoPage} />
      <Route path="/users/:id/todos" component={UserTodoPage} />
    </div>
  );
}

export default App;
