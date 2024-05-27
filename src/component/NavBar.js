import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link} from 'react-router-dom'

function NavBar() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark">
       <img className='imge' variant="top" src="images/icon.jpg"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="navbar">
     
   <ul className='nav-links'> 
        <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleTabClick('home')}>
            Home
          </Link>
        </li>
        <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
          <Link to="/medicine" onClick={() => handleTabClick('about')}>
          Explore To Enjoy Video's
          </Link>
        </li>
      </ul>
<ul className="nav-links">

      <li className={`nav-item ${activeTab === 'SignIn' ? 'active' : ''}`}>
          <a href="#SignIn" onClick={() => handleTabClick('SignIn')}>
          Sign In
          </a>
        </li>
        <li className={`nav-item ${activeTab === 'Signup' ? 'active' : ''}`}>
          <a href="#Signup" onClick={() => handleTabClick('Signup')}>
          Sign up
          </a>
        </li>
        </ul>

    </nav>
          
        </Navbar.Collapse>
      </Navbar>
     
    </div>
  )
}

export default NavBar