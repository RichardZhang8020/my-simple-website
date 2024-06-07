import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lawOfLargeNumbers from '../images/lawOfLargeNumbers.png'
import { Link } from 'react-router-dom';

function Project() {
  return (
    <Link to="https://richardzhang8020.github.io/lawOfLargeNumbers/" target="_blank" rel="noopener noreferrer">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={lawOfLargeNumbers} />
        <Card.Body>
          <Card.Title>Law of Large Numbers Visualization</Card.Title>
          <Card.Text>
            Uses 3d graphics with three.js to roll the dice.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Project;