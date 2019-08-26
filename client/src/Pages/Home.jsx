import React from 'react';
import LinkButton from '../components/LinkButton';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>어플리케이션을 골라주세요</h1>
      <ul>
        <li>
          <LinkButton className="todo-button" path="/users" name="투두" />
        </li>
        <li>
          <LinkButton className="post-button" path="/posts" name="게시판" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
