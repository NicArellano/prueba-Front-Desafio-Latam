import { useParams } from "react-router-dom"


const Pizza = () => {
  const { pizzas } = useContext(ContextPizza);
  const {id} = useParams()


    

  return (
    <div>

    </div>
  )
}

export default Pizza