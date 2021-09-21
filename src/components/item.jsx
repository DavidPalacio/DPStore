import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";

function Item(props) {

  return (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Link to={`/item/${props.id}`}>ir al detalle</Link>     
        <Card.Text>${props.price}</Card.Text>     
      </Card.Body>    
    </Card> 
  </>
  );
}
export default Item;