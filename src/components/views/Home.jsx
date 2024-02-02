import { useContext } from "react";
import { ContextPizza } from "../context/ContextPizza";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { pizzas } = useContext(ContextPizza);

  const navigate = useNavigate()
  const pizzaDetails = (id) => {
    navigate(`/pizza/:${id}`)
  }
  

  return (
    <div className="cardHome">
      {pizzas.map((pizza, index) => (
        <Card className="card" key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <Button variant="primary">Añadir Pizza</Button>
            <Button onClick={(pizzaDetails(pizza.id))} variant="primary">Ver detalles</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
