import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const RetiroPage = () => {
    const [input, setinput] = useState(0)
    const [error, seterror] = useState("")
    const navigate = useNavigate()
    const onChange = (e) => {
        setinput(e.target.value)
    }
    const retirar = () => {
        const cantidad = Number(input)
        //logica para retirar dinero
        if(cantidad < 0){
            seterror("No puedes retirar una cantidad negativa")
            return
        } 
        if(cantidad === 0) {
            seterror("No puedes retirar 0 euros")
            return
        }
        if(cantidad<10 || cantidad>3000) {
            seterror("La cantidad debe estar entre 10 y 3000 euros")
            return
        }
        if(cantidad % 10 !== 0) {
            seterror("La cantidad debe ser multiplo de 10")
            return
        }
        alert(`Has retirado ${cantidad} euros`)
        navigate('/despedida', {
            replace: true //reemplaza la ruta actual en el historial del navegador, es decir, no permite volver a la pagina anterior    
        }) //navega a la pagina de inicio
    }
  return (
    <main>
    <input value={input}
    onChange={onChange}
    placeholder="Cantidad a retirar" />
    <button onClick={retirar}>Retirar</button>
    {error && <p style={{color: "red"}}>{error}</p>}
    </main>
  )
}
