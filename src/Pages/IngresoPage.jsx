import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const IngresoPage = () => {
    const [input, setinput] = useState(0) //todo input debe manejarse a traves de un estado
    const [input2, setinput2] = useState("")
    const [error, seterror] = useState("")
    const navigate = useNavigate()
    const onChange = (e) => {
        setinput(e.target.value)
    }
    const onChange2 = (e) => {
        setinput2(e.target.value)
    }
    const ingresar = () => {
        const cantidad = Number(input)
        //logica para ingresar dinero
         if(cantidad < 0) {
            seterror("No puedes ingresar una cantidad negativa")
            return //si el valor es negativo, no hace nada
         }
            
         if(cantidad === 0) {
            seterror("No puedes ingresar 0 euros")
            return //si el valor es 0, no hace nada
         }
             
         //si el valor es positivo, hace la logica para ingresar dinero
         if(cantidad<5 || cantidad>3000){
            seterror("La cantidad debe estar entre 5 y 3000 euros")
            return //si el valor es menor que 5 o mayor que 3000, no hace nada
         } 
         alert(`Has ingresado ${cantidad} euros con el concepto: ${input2}`) //muestra una alerta con el valor ingresado
            navigate('/despedida') //navega a la pagina de inicio
    }
  return (
    <main>
    <input value={input} onChange={onChange} type="number" placeholder="Cantidad a ingresar" />
    <input value={input2} onChange={onChange2} type="text" placeholder="Concepto" />
    <button onClick={ingresar}>Ingresar</button>
    {error && <p style={{color: "red"}}>{error}</p>}
    </main>
  )
}
