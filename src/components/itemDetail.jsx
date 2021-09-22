import { useState } from "react";
import { Link } from "react-router-dom";
import {Card, Button, Container} from "react-bootstrap";
import ItemCount from "./itemCount";

function ItemDetail(props) {
  const [stock, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);

  };
  return (
<>
  <Container className="p-2"> 
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Img variant="top" src={props.img} />
      <Card.Text>{props.description}</Card.Text>   
      <Card.Text>${props.price}</Card.Text>     
      <Card.Text>Disponibles: {props.stock}</Card.Text>   
      <div>      
          <ItemCount stock={props.stock}/>      
      </div>      
      <Button variant="primary" onClick={(props)}>Agregar</Button>        
    </Card.Body>    
    </Card> 
  </Container>
  </>
  );
}

export default ItemDetail;
