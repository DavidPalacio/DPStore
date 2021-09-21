import Item from "./item";
import {Container} from "react-bootstrap";
import { productsJson } from "./productsJson";
const { useEffect, useState } = require("react");

export default function ItemList() {

/*
  const [products, setProducts] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      
      
      setTimeout(() => resolve(productsJson), 1000);
    })
      .then((dataResolve) => {
        console.log("data Resolve", dataResolve);
        setProducts(dataResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);
*/

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(productsJson), 500);
      console.log("Se cargo la lista List Container", products)
    })
      .then((data) => setProducts(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h1>Loading ...</h1>
  ) : 
  (
    <>
    <Container className="p-2 fluid"> 
      {products.map((setProducts) => (
        <Item {...setProducts}/>
      ))}
    </Container>
    </>  
  );
}
