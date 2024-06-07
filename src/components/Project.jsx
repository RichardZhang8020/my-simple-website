import Card from 'react-bootstrap/Card';
import compoundInterest from '../images/compoundInterest.png'
import { Link } from 'react-router-dom';
import '../css/project.css'; 

function Project() {
  return (
    <Link to="/compoundInterest" style={{ textDecoration: 'none' }} className="card-link">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={compoundInterest} />
        <Card.Body>
          <Card.Title>Compound Interest Calculator</Card.Title>
          <Card.Text>
            Graphs compound interest based off of user values using d3.js.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Project;