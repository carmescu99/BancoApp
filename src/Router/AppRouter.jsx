import { Route, Routes } from "react-router-dom"
import { App } from "../App"
import { HomePage } from "../Pages/HomePage"
import { IngresoPage } from "../Pages/IngresoPage"
import { RetiroPage } from "../Pages/RetiroPage"
import { DespedidaPage } from "../Pages/DespedidaPage"

export const AppRouter = () => {
  return (
    <Routes> 
    {/* Rutas de la aplicacion */}
    {/* Cada ruta tiene un path y un elemento que se renderiza cuando se accede a ese path */}
    {/* El path es la URL que se escribe en el navegador */}
    <Route
    path="/" element={<App/>}/>
        {/* Si la ruta no existe, redirige a la pagina principal */}
    <Route path="*" element={<App/>}/>
    <Route path="/home/:dni" element={<HomePage/>}/> {/*//el :dni es un parametro que se pasa a la ruta, es dinamico, cambiante*/}
     {/* El parametro se puede acceder en el componente a traves de useParams */}
    <Route path="/ingreso" element={<IngresoPage/>}/>
    <Route path="/retiro" element={<RetiroPage/>}/>
    <Route path="/despedida" element={<DespedidaPage/>}/>

    
    </Routes>
  )
}
