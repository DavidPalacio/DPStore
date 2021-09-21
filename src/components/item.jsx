import { Link } from "react-router-dom";
import {Card, Container} from "react-bootstrap";

function Item(props) {
  return (
  <>
  <Container className="p-2"> 
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Link to={`/item/${props.id}`}>ir al detalle</Link>     
      <Card.Text>${props.price}</Card.Text>     
    </Card.Body>    
    </Card> 
  </Container>
  </>
  );
}

export default Item;
    