import './Nav.css';

const Nav : React.FC = () =>{
    return(
        <nav className='navSup'>
            <div className='navSupContainer'>
                <header>
                    <a href="#header">
                        <img src="/logo-new.png" alt="Logo JCG Inversiones" width={44} height={44} />
                        <div className='navBrand'>
                            <span className='navBrandTitle'>JCG Inversiones</span>
                            <span className='navBrandSub'>Asesor Financiero</span>
                        </div>
                    </a>
                </header>

                <ul className='ulNS'>
                    <li><a href="#presentation">Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

                <div className='navActions'>
                    <a href="https://jcgstrategic.com" target="_blank" rel="noopener noreferrer" className='navBtnStrategic'>
                        JCG Strategic ↗
                    </a>
                    <a href="https://juancg00ginversiones.github.io/JCGdashboard/" target="_blank" rel="noopener noreferrer" className='navBtnDashboard'>
                        Dashboard ↗
                    </a>
                    <a href="https://plataformaingecapital.com/" target="_blank" rel="noopener noreferrer" className='navBtnPlatform'>
                        Plataforma ↗
                    </a>
                </div>
            </div>
        </nav>
    )    
}

export default Nav;
