import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import Project2 from './Project2';


function Projects() {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={6}><Project/></Col>
        <Col sm={6}><Project2/></Col>
      </Row>
    </Container>
  );
}

export default Projects;