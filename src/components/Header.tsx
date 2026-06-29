import './Header.css';

interface HeaderProps {
    id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
    return (
        <header className='header' id={id}>
            <div className='heroSplit'>

                {/* IZQUIERDA — FINANCIERO */}
                <div className='heroFin'>
                    <div className='heroFinBg'>
                        <img src='/hero-market.png' alt='Mercado de capitales' />
                        <div className='heroFinOverlay'></div>
                    </div>
                    <div className='heroFinInner'>
                        <p className='heroEyebrow'>
                            <span className='eyebrowDot dotRed'></span>
                            Inversiones Financieras
                        </p>
                        <h1 className='heroTitle'>
                            Tomá las mejores<br />
                            decisiones de<br />
                            <em className='heroTitleEm'>inversión</em>
                        </h1>
                        <p className='heroSub'>
                            Análisis técnico, asesoramiento personalizado y herramientas profesionales para maximizar tus rendimientos.
                        </p>
                        <div className='heroMainBtns'>
                            <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones' target='_blank' rel='noopener noreferrer' className='heroBtnRed'>
                                Pedir asesoría
                            </a>
                            <a href='#services' className='heroBtnGhost'>
                                Ver servicios
                            </a>
                        </div>
                        <div className='heroEco'>
                            <a href='https://juancg00ginversiones.github.io/JCGdashboard/' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnRed'>Dashboard ↗</a>
                            <a href='https://plataformaingecapital.com/' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnGhost'>Plataforma ↗</a>
                            <a href='https://jcgstrategic.com' target='_blank' rel='noopener noreferrer' className='ecoBtn ecoBtnGold'>JCG Strategic ↗</a>
                        </div>
                        <p className='heroCnv'>Asesor Financiero · Agente Productor CNV N°2145</p>
                    </div>
                </div>

                {/* DIVISOR */}
                <div className='heroDivider' aria-hidden='true'></div>

                {/* DERECHA — REAL ESTATE */}
                <div className='heroRE'>
                    <div className='heroREBg'>
                        <img src='/re-inversion.png' alt='Real Estate' />
                        <div className='heroREOverlay'></div>
                    </div>
                    <div className='heroREInner'>
                        <p className='heroEyebrow'>
                            <span className='eyebrowDot dotGray'></span>
                            Real Estate
                        </p>
                        <h2 className='heroTitleRE'>
                            Invertí en<br />
                            propiedades con<br />
                            criterio profesional
                        </h2>
                        <p className='heroSub'>
                            Compra, venta e inversión inmobiliaria. Te acompañamos en cada etapa para que tu capital trabaje en el mercado correcto.
                        </p>
                        <div className='heroMainBtns'>
                            <a href='#realestate' className='heroBtnGhostRE'>
                                Ver propiedades
                            </a>
                            <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='heroBtnGold'>
                                Agendar reunión →
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
