import ButtonAction from './ButtonAction';
import './Nav.css';
import { useState } from 'react';

const Nav : React.FC = () =>{
    const [activeSection, setActiveSection] = useState<string>('header');


    return(
        <nav className='navSup'>
            <div className='navSupContainer'>
                <h3><a href="#header">Juan Giacovino</a></h3>
                <ul className='ulNS'>
                    <li><a href="#presentation" className={activeSection === 'presentation' ? 'active' : ''}>Sobre Mi</a></li>
                    <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Servicios</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contacto</a></li>
                </ul>
                <ButtonAction text='Descargas' colorSet={2} to='#services'/>
            </div>
        </nav>
    )    
}

export default Nav;