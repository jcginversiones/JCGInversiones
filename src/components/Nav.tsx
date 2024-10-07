import ButtonAction from './ButtonAction';
import './Nav.css';

const Nav : React.FC = () =>{


    return(
        <nav className='navSup'>
            <div className='navSupContainer'>
                <header>
                    <a href="#header">
                        <img src="/logo.webp" alt="Logo de Juan Cruz Giacovino" width={40} height={40} />
                        <h3>JCG Inversiones</h3>
                    </a>
                </header>
               
                
                <ul className='ulNS'>
                    <li><a href="#presentation">Sobre Mi</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <ButtonAction text='Servicios' colorSet={2} to='#services'/>
            </div>
        </nav>
    )    
}

export default Nav;