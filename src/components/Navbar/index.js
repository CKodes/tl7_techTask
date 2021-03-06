import React, { useState } from 'react';
import Button from '../Button/index';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <Link to='/about-me-page'>
        <Button className='btn' onClick={handleClick}>
          About
        </Button>
      </Link>
      <Link to='/'>
        <Button className='btn' onClick={handleClick}>
          Home
        </Button>
      </Link>
      <Link to='/contact-me-page'>
        <Button className='btn' onClick={handleClick}>
          Contact
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
