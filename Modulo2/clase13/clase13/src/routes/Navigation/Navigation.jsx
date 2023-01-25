import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
        <NavLink to='/inicio'>Inicio</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/reservas'>Reservas</NavLink>
        <NavLink to='/nosotros'>Nosotros</NavLink>
        <NavLink to='/contactanos'>Contactanos</NavLink>

    </div>
  )
}

export default Navigation