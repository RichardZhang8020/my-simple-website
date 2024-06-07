import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Aristotle from '../images/Aristotle.png'

function HonestyCard() {
    return (
      <Link to="/blog/honesty" style={{ textDecoration: 'none' }} className="card-link">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Aristotle} />
          <Card.Body>
            <Card.Title>Radical Honesty</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    );
  }

export default HonestyCard;