import ButtonAction from './ButtonAction';
import './Nav.css';

const Nav : React.FC = () =>{
    return(
        <nav className='navSup'>
            <h3>Juan Giacovino</h3>
            <ul className='ulNS'>
                <li>Sobre Mi</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
            <ButtonAction text='Descargas' colorSet={2}/>
        </nav>
    )    
}

export default Nav;