import React from 'react';
import { Link } from 'react-router-dom';
const LinkButton = ({ path, name }) => {
  return (
    <div className="LinkButton">
      <Link className="link" to={path} >{name}</Link>
    </div>
  )
}

export default LinkButton;