import React, { Component } from "react";
import LinkButton from '../components/LinkButton';

class UserInfoPage extends Component {
  // TODO: state
  state = {
    name: '',
    email: '',
    phone: ''
  }

  // TODO: CDM
  componentDidMount() {
    this.getData().then(user => {
      const { name, email, phone } = user;
      this.setState({ name, email, phone })
    })
  }

  // TODO: fetch users/:id data
  getData() {
    let id = this.props.match.params.id;
    let url = `https://koreanjson.com/users/${id}`;
    return fetch(url).then(data => data.json()).catch(err => console.error(err))
  }

  // TODO: render
  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>유저 개인 페이지</h1>
        <LinkButton path="/" name="Home"/>
        <LinkButton path="/users" name="뒤로가기"/>
        <ul>
          <li>{`이름 : ${name}`}</li>
          <li>{`이메일 : ${email}`}</li>
          <li>{`모바일 : ${phone}`}</li>
        </ul>
      </div>
    )
  }
}

export default UserInfoPage;