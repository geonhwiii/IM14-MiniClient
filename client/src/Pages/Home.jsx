import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>어플리케이션을 골라주세요</h1>
      <ul>
        <li><Link to="/users">투두</Link></li>
        <li><Link to="/posts">게시판</Link></li>
      </ul>
    </div>
  )
}

export default Home;