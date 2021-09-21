import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "./productsJson";
import ItemDetail from "./itemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productsJson.filter((item) => item.id === id)),
        500
      );
    }).then((data) => setProduct(data[0]));
  }, []);

  return <ItemDetail {...product} />;
}


export default ItemDetailContainer;
