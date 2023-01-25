import { Routes , Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Contactanos from '../../pages/Contactanos/Contactanos';
import Inicio from '../../pages/Inicio/Inicio';
import Menu from '../../pages/Menu/Menu';
import Nosotros from '../../pages/Nosotros/Nosotros';
import Reservas from '../../pages/Reservas/Reservas';

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route path='/inicio' element = {<Inicio/>}/>
            <Route path='/menu' element = {<Menu/>}/>
            <Route path='/reservas' element = {<Reservas/>}/>
            <Route path='/nosotros' element = {<Nosotros/>}/>
            <Route path='/contactanos' element = {<Contactanos/>}/>
        </Route>
    </Routes>
  )
}

export default Allroutes