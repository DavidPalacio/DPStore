import {Card, Button, Container, Row, Col} from "react-bootstrap";
const { useEffect, useState } = require("react");

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      ///
      const data = [
        {
          id: "1",
          name: "naranjas",
          description: "Toronja",
          img:  "https://images.unsplash.com/photo-1613747495731-3add0988073a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          stock: 9
        }, 
        {
            id: "2",
            name: "Mandarinas",
            description: "Arrayana",
            img: "https://images.unsplash.com/photo-1611329646571-689ddf8bfee9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            stock: 50
          },
          {
            id: "3",
            name: "Cebollas",
            description: "Cabezona",
            img: " https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            stock: 253
          }
         


      ];
      setTimeout(() => resolve(data), 3000);
    })
      .then((dataResolve) => {
        console.log("data Resolve", dataResolve);
        setProducts(dataResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
    <div>
    {products.map((cadaProducto) => (
        <>
        <Container className="p-2"> 
            
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{cadaProducto.name}</Card.Title>
                    <Card.Img variant="top" src={cadaProducto.img} />
                    <Card.Text>{cadaProducto.description}</Card.Text>
                    <Card.Text>Disponibles: {cadaProducto.stock}</Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
                </Card> 
        </Container>
        </>

        ))}
    </div>
    );
}
