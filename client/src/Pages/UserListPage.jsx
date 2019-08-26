import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';

class UserListPage extends Component {
  // TODO: state
  state = {
    users: [],
    activeId: ''
  }

  // TODO: fetch data from koreanjson API 
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
    }).catch(err => console.error(err));
  }

  // TODO: CDM
  componentDidMount() {
    const { users } = this.state;
    this.getData().then(data => this.setState({ users: [...users, ...data] }))
  }

  // TODO: Change activeId
  onNameClick = e => {
    this.changeColor(e.target)
    const { users } = this.state;
    let activeName = e.target.textContent;
    let activeId = 0;
    users.forEach(user => user.name === activeName && (activeId = user.id) )
    this.setState({ activeId })
  }

  // TODO: Change selected Name
  changeColor = (target) => {
    target.parentNode.childNodes.forEach(child => child.style.color = "black");
    target.style.color = 'red'
  }

  // TODO: render
  render() {
    const { users, activeId } = this.state;
    const { onNameClick } = this;
    return (
    <div>
      <h1>유저 리스트 페이지</h1>
      <ul>
        {users.map((user) => <li key={user.id} onClick={onNameClick}>{user.name}</li>)}
      </ul>
      <LinkButton path={{pathname: `/users/${activeId}`, state: {fromNotifications: true}}} name="선택"/>
      <LinkButton path={'/'} name="뒤로가기" />
    </div>
  )
  }
}


export default UserListPage;