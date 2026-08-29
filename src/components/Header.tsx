import './Header.css';

interface HeaderProps {
    id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
    return (
        <header className='header' id={id}>
            <div className='heroSplit'>

                {/* PANEL 1 — PERSONAS FÍSICAS */}
                <div className='heroPanel heroPF'>
                    <div className='heroPanelBg'>
                        <img src='/hero-market.png' alt='Mercado de capitales' />
                        <div className='heroPanelOverlay'></div>
                    </div>
                    <div className='heroPanelContent'>
                        <p className='heroPanelEye'>
                            <span className='heroEyeDot dotRed'></span>
                            Personas Físicas
                        </p>
                        <h1 className='heroPanelTitle'>
                            Invertí tu dinero con criterio profesional
                        </h1>
                        <p className='heroPanelSub'>
                            Asesoramiento financiero, herramientas de análisis y acceso al mercado de capitales.
                        </p>
                        <div className='heroPanelBtns'>
                            <a href='https://wa.me/541169787999' target='_blank' rel='noopener noreferrer' className='heroBtnRed'>
                                Pedir asesoría
                            </a>
                            <a href='#services' className='heroBtnGhost'>
                                Ver planes
                            </a>
                        </div>
                        <div className='heroEcoLinks'>
                            <a href='https://juancg00ginversiones.github.io/JCGdashboard/' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnRed'>Dashboard</a>
                            <a href='https://plataformaingecapital.com/' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnGhost'>Plataforma</a>
                            <a href='https://jcgstrategic.com' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnGold'>JCG Strategic</a>
                        </div>
                    </div>
                </div>

                <div className='heroDivider'></div>

                {/* PANEL 2 — PERSONAS JURÍDICAS */}
                <div className='heroPanel heroPJ'>
                    <div className='heroPanelBg'>
                        <img src='/hero-empresas.png' alt='Empresas' />
                        <div className='heroPanelOverlayGold'></div>
                    </div>
                    <div className='heroPanelContent'>
                        <p className='heroPanelEye'>
                            <span className='heroEyeDot dotGold'></span>
                            Personas Jurídicas
                        </p>
                        <h2 className='heroPanelTitle'>
                            Mercado de capitales para tu empresa
                        </h2>
                        <p className='heroPanelSub'>
                            Financiamiento, tesorería, planificación patrimonial y más. Vía brokers regulados.
                        </p>
                        <div className='heroPanelBtns'>
                            <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20consulta%20para%20empresa' target='_blank' rel='noopener noreferrer' className='heroBtnGold'>
                                Hablar con un asesor
                            </a>
                            <a href='#empresas' className='heroBtnGhostDark'>
                                Ver servicios
                            </a>
                        </div>
                    </div>
                </div>

                <div className='heroDivider'></div>

                {/* PANEL 3 — REAL ESTATE */}
                <div className='heroPanel heroRE'>
                    <div className='heroPanelBg'>
                        <img src='/re-inversion.png' alt='Real Estate' />
                        <div className='heroPanelOverlay'></div>
                    </div>
                    <div className='heroPanelContent'>
                        <p className='heroPanelEye'>
                            <span className='heroEyeDot dotGray'></span>
                            Real Estate
                        </p>
                        <h2 className='heroPanelTitle'>
                            Invertí en propiedades con respaldo experto
                        </h2>
                        <p className='heroPanelSub'>
                            Compra, venta e inversión inmobiliaria. Acompañamiento en cada etapa.
                        </p>
                        <div className='heroPanelBtns'>
                            <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='heroBtnGoldOutline'>
                                Agendar reunión
                            </a>
                            <a href='#realestate' className='heroBtnGhost'>
                                Ver propiedades
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
