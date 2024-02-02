import { useNavigate, useParams } from "react-router-dom"

import { ContextPizza } from "../context/ContextPizza";
import { useContext } from "react";

const Pizza = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const { pizzas } = useContext(ContextPizza);

  console.log(JSON.stringify(pizzas, null, 2) + 'aca estan las pizzas');

  
  const regresar = () => {
    navigate("/");
  };

  const pizzaSeleccionada = pizzas.find(pizza => pizza.id === id);

  if (!pizzaSeleccionada) {
    return <div>No se encontró la pizza con el ID {id}</div>;
  }

  return (
    <div className="container-info">
      <div className="cardinfo">
        <img className="izquierda" src={pizzaSeleccionada?.img} alt="CardImage" />
        <aside className="text-center">
          <h1>{pizzaSeleccionada?.name}</h1>
        </aside>
        <aside>
          {pizzaSeleccionada?.desc}
        </aside>
        <h5 className="mt-2">
          Ingredientes:
        </h5>
        <ul>
          {pizzaSeleccionada?.ingredients.map((ingredients, i) => (
            <ol key={i}>
              {ingredients}
            </ol>
          ))}
        </ul>
        <hr></hr>
        <div className="reset">
          <p className="price"> Precio: ${pizzaSeleccionada?.price}</p>
          <div className="ms-5">
            <button className="btn btn-sm btn-danger ms-5 me-5" onClick={regresar}>
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza