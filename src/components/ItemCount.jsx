import React, { useState, useEffect } from "react";
import {Container, Button } from "react-bootstrap";


export default function ItemCounts(props) {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(props.stock);

  useEffect(() => {
    console.log("Estoy Comparando el Stock y El contador", count, stock);

    return () => {
      console.log("esto lo voy a hacer cuando ya no este en el DOM");
    };
  }, [count]); //componentDidMount y countDidUpdate al vigilar count

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <Container>
      <Button onClick={restar}> - </Button>
      {count}
      <Button onClick={sumar}> + </Button>
    </Container>
    </>
  );
}