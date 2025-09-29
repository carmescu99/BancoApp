import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const App = () => {
  const [input, setinput] = useState("")
  const [error, seterror] = useState("")
  const navigate = useNavigate()
  const onChange = (e) => {
    setinput(e.target.value)
  }
  const navegar = () => {
    if(input.length !== 9){
      seterror("El DNI debe tener 9 caracteres")
      return
    }
    navigate(`home/${input}`) //navega a la ruta /home con el dni introducido como parametro
  }
  return (
    <main>
    <input 
    value={input} //toma el valor cambiante del estado
    onChange={onChange} //cada vez que se escribe en el input, se ejecuta la funcion onChange
    type="text" //voy a introducir strings
    placeholder="Introduzca DNI" />
    <button onClick={navegar}>Siguiente</button>
    {/* //si error es true, muestra el mensaje de error de color rojo */}
    {error && <p style={{color: "red"}}>{error}</p>} 
    </main>
  )
}
