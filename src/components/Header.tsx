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
                    <div className='candlesDecor' aria-hidden='true'>
                        <div className='cdl'><div className='cdlW cdlGray' style={{height:'10px'}}></div><div className='cdlB cdlGray' style={{height:'35px'}}></div><div className='cdlW cdlGray' style={{height:'7px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlGray' style={{height:'12px'}}></div><div className='cdlB cdlGray' style={{height:'55px'}}></div><div className='cdlW cdlGray' style={{height:'8px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlRed' style={{height:'14px'}}></div><div className='cdlB cdlRed' style={{height:'80px'}}></div><div className='cdlW cdlRed' style={{height:'10px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlRed' style={{height:'16px'}}></div><div className='cdlB cdlRed' style={{height:'100px'}}></div><div className='cdlW cdlRed' style={{height:'12px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlWh' style={{height:'11px'}}></div><div className='cdlB cdlWh' style={{height:'68px'}}></div><div className='cdlW cdlWh' style={{height:'8px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlWh' style={{height:'9px'}}></div><div className='cdlB cdlWh' style={{height:'48px'}}></div><div className='cdlW cdlWh' style={{height:'6px'}}></div></div>
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

            {/* BARRA ANCLA */}
            <nav className='heroAnchor'>
                <a href='#services' className='anchorLink anchorActive'>Inversiones Financieras</a>
                <span className='anchorSep'>/</span>
                <a href='#realestate' className='anchorLink anchorGold'>Real Estate</a>
                <span className='anchorSep'>/</span>
                <a href='#presentation' className='anchorLink'>Nosotros</a>
                <span className='anchorSep'>/</span>
                <a href='#contact' className='anchorLink'>Contacto</a>
            </nav>
        </header>
    );
};

export default Header;
