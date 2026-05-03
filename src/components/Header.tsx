import ButtonAction from './ButtonAction';
import './Header.css';

interface HeaderProps {
    id: string;
}

const Header : React.FC<HeaderProps> = ({ id }) =>{
    return(
        <header className='header' id={id}>
            <div className='headerContent'>
                <section className='headerSection1'>
                    <p className='hSText1'>— ASESOR FINANCIERO · CNV N°2145 —</p>
                    <h2 className='hSTittle'>Toma las mejores decisiones de inversión, acompañado de un Profesional</h2>
                    <p className='hSText2'>Análisis detallados y herramientas profesionales para ayudarte a maximizar tus rendimientos</p>

                    <div className='hSButtons'>
                        <ButtonAction colorSet={1} text='Pedir asesoría' to='https://wa.me/541169787999?text=Hola%20JCG Inversiones,%20encontré%20tu%20perfil%20a%20través%20de%20la%20web%20y%20me%20interesaba%20saber%20sobre%20tus%20Servicios%20en%20Trading'/>
                        <ButtonAction text='Nuestros Servicios' colorSet={3} to='#services' />
                    </div>

                    {/* Accesos directos al ecosistema */}
                    <div className='hSEcosystem'>
                        <a href="https://juancg00ginversiones.github.io/JCGdashboard/" target="_blank" rel="noopener noreferrer" className='hSEcoBtn hSEcoDash'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm7 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM0 7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"/>
                            </svg>
                            Dashboard
                        </a>
                        <a href="https://plataformaingecapital.com/" target="_blank" rel="noopener noreferrer" className='hSEcoBtn hSEcoPlatform'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                            </svg>
                            Plataforma Ingecapital
                        </a>
                        <a href="https://jcgstrategic.com" target="_blank" rel="noopener noreferrer" className='hSEcoBtn hSEcoStrategic'>
                            JCG Strategic ↗
                        </a>
                    </div>
                </section>

                <section className='headerSection2'>
                    <img src="/forex.png" alt="Finanzas Inteligentes" />
                </section>
            </div>

            <p className='headerFinalText'>ASESOR FINANCIERO AGENTE PRODUCTOR CNV N°2145</p>
        </header>
    )
}

export default Header;
