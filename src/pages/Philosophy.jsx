import React from 'react';
import '../css/about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HonestyCard from '../components/HonestyCard';

const AboutPage = () => {
  return (
    <Container>
      <h1>My Personal Philosophy</h1>
      <Row className='px-4 my-5'>
        <Col sm={6}><HonestyCard/></Col>
        {/* <Col sm={6}>hi</Col> */}
      </Row>
    </Container>
  );
}

export default AboutPage;