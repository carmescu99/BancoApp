import { useNavigate, useParams } from "react-router-dom"


export const HomePage = () => {
    const navigate = useNavigate()
    const onIngreso = () => {
        navigate('/ingreso')
    }
    const onRetiro = () => {
        navigate('/retiro')
    }
    const onSalir = () => {
        navigate('/')
    }
    const params = useParams() //obtiene los parametros de la ruta, en este caso el dni
    

  return (
    <main>  
    <h1>Bienvenido a su banco, {params.dni}</h1>
    <h3>Seleccione una opcion</h3>
    <button onClick={onIngreso}>Ingresar dinero</button>
    <button onClick={onRetiro}>Retirar dinero</button>
    <button onClick={onSalir}>Salir</button>
    </main>
  )
}
