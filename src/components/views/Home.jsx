import { useContext } from "react";
import { ContextPizza } from "../context/ContextPizza";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const { pizzas } = useContext(ContextPizza);

  return (
    <div className="cardHome">
      {pizzas.map((pizza, index) => (
        <Card className="card" key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <Button variant="primary">Añadir Pizza</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
