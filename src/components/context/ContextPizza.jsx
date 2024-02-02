import { createContext, useEffect, useState } from "react";


export const ContextPizza = createContext()

const PizzaProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
   

    const getPizzas = async () => {
        try {
            
            const res = await fetch('../../../public/pizzas.json')
            const data = await res.json()
            setPizzas(data)
            
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
      getPizzas()
    }, [])
    

    return(
        <ContextPizza.Provider value={{pizzas}}>
            {children}
        </ContextPizza.Provider>
    )
}

export default PizzaProvider