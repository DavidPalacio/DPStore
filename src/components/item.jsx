import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";

function Item(setProducts) {
  return (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{setProducts.name}</Card.Title>
        <Link to={`/item/${setProducts.id}`}>ir al detalle</Link>     
        <Card.Text>${setProducts.price}</Card.Text>     
      </Card.Body>    
    </Card> 
  </>
  );
}
export default Item;