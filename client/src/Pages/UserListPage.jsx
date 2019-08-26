import React, { Component } from 'react';

class UserListPage extends Component {
  state = {
    users: []
  }
  getData() {
    let url = "https://koreanjson.com/users";
    return fetch(url).then(data => data.json()).then(res => {
      let body = [];
      res.forEach(user => {
        let users = {};
        users['id'] = user.id;
        users['name'] = user.name;
        users['email'] = user.email;
        users['phone'] = user.phone;
        body.push(users);
      });
      return body;
    });
  }
  componentDidMount() {
    const { users } = this.state;
    this.getData().then(data => this.setState({ users: [...users, ...data] }))
  }
  render() {
    const { users } = this.state;
    return (
    <div>
      <h1>유저 리스트 페이지</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
  }
}


export default UserListPage;