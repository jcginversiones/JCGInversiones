import ButtonAction from './ButtonAction';
import './Nav.css';

const Nav : React.FC = () =>{


    return(
        <nav className='navSup'>
            <div className='navSupContainer'>
                <h3><a href="#header">Juan Giacovino</a></h3>
                <ul className='ulNS'>
                    <li><a href="#presentation">Sobre Mi</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <ButtonAction text='Descargas' colorSet={2} to='#services'/>
            </div>
        </nav>
    )    
}

export default Nav;