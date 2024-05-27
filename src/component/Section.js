import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom'
import './Section.css';

export default function Section() {
  return (
    <div>
        
      
      <Row>
      <Link className="mt-2" to="/medicine"><img style={{ width: '3rem',height:'3rem' }} src='images/left-arrow.png'></img></Link>
        <Col>
        <div className='mx-4 mt-3 my-5'>
          <Card style={{ width: '18rem',height:'25rem' }} className="custom-card">
            <Card.Img variant="top" src="images/olympic.jpg" />
            <Card.Body className='font-color'>
              <Card.Title></Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            <div className="arrow-right ">
            <Link type='button' to="/Olympic" className='btn mt-5 btn-outline-success btn-lg'>Watch Olympic Sports</Link>
            </div>
          </Card>
          </div>
        </Col>
       
        <Col>
        <div className='mx-4 mt-3 my-5'>
          <Card style={{ width: '18rem',height:'25rem' }} className="custom-card">
            <Card.Img variant="top" src="images/adsport.jpg" />
            <Card.Body className='font-color'>
              <Card.Title></Card.Title>
              <Card.Text>
            
              </Card.Text>
            </Card.Body>
            <div className="arrow-right">
            <Link type='button' to="/adventure" className='btn mt-5 px-2 btn-outline-success btn-lg'>Extreme/Adventure Sports</Link>
            </div>
          </Card>
          </div>
        </Col>
        <Col>
        <div className='mx-4 mt-3 my-5'>
          <Card style={{width: '18rem',height:'25rem' }} className="custom-card">
            <Card.Img variant="top" src="images/team.png" />
            <Card.Body className='font-color'>
              <Card.Title>
                      
              </Card.Title>
              <Card.Text>
             
              </Card.Text>
            </Card.Body>
            <div className="arrow-right">
            <Link type='button' to="/team" className='btn mt-5  btn-outline-success btn-lg'>Team sports</Link>
            </div>
          </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
 

 
  
