import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";

function Item(props) {
  const producto = props;
  console.log("producto: ", producto);
  console.log(producto.props.name);
  return (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{producto.props.name}</Card.Title>
        <Link to={`/item/${producto.props.id}`}>ir al detalle</Link>     
        <Card.Text>${producto.props.price}</Card.Text>     
      </Card.Body>    
    </Card> 
  </>
  );
}
export default Item;