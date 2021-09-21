import { useEffect, useState } from "react";
import { productsJson } from "./productsJson";
import ItemList from "./itemList";

function ItemListContainer() {
  //const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(false);

  return (
    <ItemList/>
  );
}

export default ItemListContainer;
