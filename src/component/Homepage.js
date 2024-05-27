
import { Link} from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Homepage.css';
function Homepage() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    
   
    <div className='jimage'>

<div className="App">
     
     
    </div>

     
     <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 d-flex d-sm-block flex-column align-items-center'>
                    <h3 className='mb-0 text-white fw-bold'>This Page Help You To Explore Top Most Views On Youtube As Per Your Interest So Why To Wait...</h3>
                    
                    <Link type='button' to="/medicine" className='btn mt-5 btn-outline-success btn-lg'>Explore To Enjoy Video's</Link>
                </div>
            </div>
        </div>
    </header>             

                 
   </div>
            
       


  )
}

export default Homepage