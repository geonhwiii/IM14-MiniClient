import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';
import './UserInfoPage.css';

class UserInfoPage extends Component {
  // TODO: state
  state = {
    name: '',
    email: '',
    phone: ''
  };

  // TODO: CDM
  componentDidMount() {
    this.getData().then(user => {
      const { name, email, phone } = user;
      this.setState({ name, email, phone });
    });
  }

  // TODO: fetch users/:id data
  getData() {
    let id = this.props.match.params.id;
    let url = `https://koreanjson.com/users/${id}`;
    return fetch(url)
      .then(data => data.json())
      .catch(err => console.error(err));
  }

  // TODO: render
  render() {
    let id = this.props.match.params.id;
    const { name, email, phone } = this.state;
    return (
      <div className="UserInfoPage">
        <h1>유저 개인 페이지</h1>
        <LinkButton path="/" name="Home" />
        <LinkButton path="/users" name="뒤로가기" />
        <ul>
          <li>
            <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="랜덤이미지" />
          </li>
          <li>{`이름 : ${name}`}</li>
          <li>{`이메일 : ${email}`}</li>
          <li>{`모바일 : ${phone}`}</li>
        </ul>
      </div>
    );
  }
}

export default UserInfoPage;
