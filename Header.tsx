import './Header.css';

interface HeaderProps {
    id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
    return (
        <header className='header' id={id}>

            {/* HERO SPLIT */}
            <div className='heroSplit'>

                {/* LADO FINANCIERO */}
                <div className='heroFinanciero'>
                    <div className='heroFinContent'>
                        <p className='heroEyebrow'>
                            <span className='eyebrowDot eyebrowDotRed'></span>
                            Inversiones Financieras
                        </p>
                        <h1 className='heroTitle'>
                            Tomá las mejores<br />
                            decisiones de<br />
                            <span className='heroTitleAccent'>inversión</span>
                        </h1>
                        <p className='heroSub'>
                            Análisis técnico, asesoramiento personalizado y herramientas profesionales para maximizar tus rendimientos.
                        </p>
                        <div className='heroActions'>
                            <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones' target='_blank' rel='noopener noreferrer' className='heroBtnPrimary'>
                                Pedir asesoría
                            </a>
                            <a href='#services' className='heroBtnGhost'>
                                Ver servicios
                            </a>
                        </div>
                        <div className='heroEcoLinks'>
                            <a href='https://juancg00ginversiones.github.io/JCGdashboard/' target='_blank' rel='noopener noreferrer' className='ecoLink ecoLinkRed'>
                                Dashboard ↗
                            </a>
                            <a href='https://plataformaingecapital.com/' target='_blank' rel='noopener noreferrer' className='ecoLink ecoLinkGhost'>
                                Plataforma ↗
                            </a>
                            <a href='https://jcgstrategic.com' target='_blank' rel='noopener noreferrer' className='ecoLink ecoLinkGold'>
                                JCG Strategic ↗
                            </a>
                        </div>
                        <p className='heroCnv'>Asesor Financiero · Agente Productor CNV N°2145</p>
                    </div>
                    {/* Velas decorativas */}
                    <div className='candlesDecor' aria-hidden='true'>
                        <div className='cdl'><div className='cdlW' style={{height:'12px'}}></div><div className='cdlB cdlGray' style={{height:'38px'}}></div><div className='cdlW' style={{height:'8px'}}></div></div>
                        <div className='cdl'><div className='cdlW' style={{height:'16px'}}></div><div className='cdlB cdlGray' style={{height:'58px'}}></div><div className='cdlW' style={{height:'10px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlWRed' style={{height:'18px'}}></div><div className='cdlB cdlRed' style={{height:'90px'}}></div><div className='cdlW cdlWRed' style={{height:'12px'}}></div></div>
                        <div className='cdl'><div className='cdlW cdlWRed' style={{height:'20px'}}></div><div className='cdlB cdlRed' style={{height:'110px'}}></div><div className='cdlW cdlWRed' style={{height:'14px'}}></div></div>
                        <div className='cdl'><div className='cdlW' style={{height:'14px'}}></div><div className='cdlB cdlWhite' style={{height:'72px'}}></div><div className='cdlW' style={{height:'9px'}}></div></div>
                        <div className='cdl'><div className='cdlW' style={{height:'10px'}}></div><div className='cdlB cdlWhite' style={{height:'52px'}}></div><div className='cdlW' style={{height:'7px'}}></div></div>
                    </div>
                </div>

                {/* DIVISOR */}
                <div className='heroDivider' aria-hidden='true'></div>

                {/* LADO REAL ESTATE */}
                <div className='heroRealEstate'>
                    <div className='heroREImg'>
                        <img src='/re-inversion.png' alt='Real Estate' />
                        <div className='heroREOverlay'></div>
                    </div>
                    <div className='heroREContent'>
                        <p className='heroEyebrow'>
                            <span className='eyebrowDot eyebrowDotGray'></span>
                            Real Estate
                        </p>
                        <h2 className='heroTitleRE'>
                            Invertí en<br />
                            propiedades con<br />
                            criterio profesional
                        </h2>
                        <p className='heroSub heroSubRE'>
                            Compra, venta e inversión inmobiliaria. Te acompañamos en cada etapa para que tu capital trabaje en el mercado correcto.
                        </p>
                        <div className='heroActions'>
                            <a href='#realestate' className='heroBtnRE'>
                                Ver propiedades
                            </a>
                            <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='heroBtnGhostRE'>
                                Agendar reunión
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* BARRA ANCLA */}
            <nav className='heroAnchorBar'>
                <a href='#services' className='anchorLink anchorLinkActive'>Inversiones</a>
                <span className='anchorSep'>/</span>
                <a href='#realestate' className='anchorLink'>Real Estate</a>
                <span className='anchorSep'>/</span>
                <a href='#presentation' className='anchorLink'>Nosotros</a>
                <span className='anchorSep'>/</span>
                <a href='#contact' className='anchorLink'>Contacto</a>
            </nav>

        </header>
    );
};

export default Header;
