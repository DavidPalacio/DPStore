import Item from "./item";
import { productsJson } from "./productsJson";
const { useEffect, useState } = require("react");

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      
      
      setTimeout(() => resolve(productsJson), 3000);
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
    <>
      {products.map((setProducts) => (
        <Item setProducts={setProducts}/>
      ))}
    </>  
  );
}
