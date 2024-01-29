import { NavLink } from "react-router-dom"

const Navbar = () => {

    const setActiveClass = ({isActive}) => (isActive? "active" : undefined)
  return (
    <div className="nav">

        <div className="titlesNav">
        <NavLink className={setActiveClass} to="/">
            Pizzería Mamma Mía!
        </NavLink>

        <NavLink className={setActiveClass} to="/carrito">
            Icono CARRO
        </NavLink>
        </div>
        
        <div className="backgroundNav">
            <h1>¡Pizzería Mamma Mia!</h1>
            <h3>¡Tenemos las mejores pizzas que podrías encontrar!</h3>

        </div>
    </div>
  )
}

export default Navbar