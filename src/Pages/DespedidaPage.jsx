import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const DespedidaPage = () => {
    const [counter, setcounter] = useState(5)
    const navigate = useNavigate()
    useEffect(() => {
        if(counter <= 0) {
            return navigate('/')
        }
        const interval = setInterval(() => {
        setcounter(prev => prev - 1) //cada segundo, resta 1 al contador
        }, 1000) //1000 milisegundos = 1 segundo
    
      return () => clearInterval(interval) //limpia el intervalo cuando el componente se desmonta, es decir, cuando ya terminé de cargar el componente, voy a limpiar el intervalo
    }, [counter]) //se ejecuta el useEffect, useEffect va a observar el contador y se va a ejecutar cada vez que el contador (el estado) cambie
    
    
  return (
    <main>
    <h1>Gracias por su visita. Recuerda retirar tu tarjeta</h1>
    <h3>Vuelve pronto</h3>
    <h4>{counter}</h4>
    </main>

  )
}
