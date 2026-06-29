import './Presentation.css';

interface PresentationProps {
    id: string;
}

const Presentation: React.FC<PresentationProps> = ({ id }) => {
    return (
        <section className='nosotros' id={id}>
            <div className='nosotrosHeader'>
                <p className='nosotrosEyebrow'>
                    <span className='eyebrowLine'></span>
                    Nuestro Equipo
                </p>
                <h2 className='nosotrosTitulo'>Las personas detrás de cada decisión</h2>
            </div>

            <div className='nosotrosGrid'>

                {/* JUAN CRUZ */}
                <article className='teamCard teamCardFinanciero'>
                    <div className='teamCardImgWrap'>
                        <img src='/profile.png' alt='Juan Cruz Giacovino' className='teamCardImg' />
                        <div className='teamCardImgOverlay'></div>
                    </div>
                    <div className='teamCardBody'>
                        <div className='teamCardRole teamCardRoleRed'>
                            <span className='roleDot roleDotRed'></span>
                            Inversiones Financieras
                        </div>
                        <h3 className='teamCardName'>Juan Cruz<br />Giacovino</h3>
                        <p className='teamCardTitle'>Asesor Financiero · Agente Productor CNV N°2145</p>
                        <p className='teamCardDesc'>
                            Ingeniero (UBA), con experiencia en YPF y Edenor. Analista técnico especializado en mercados financieros. Ayuda a sus clientes a construir carteras de inversión sólidas, claras y adaptadas a cada perfil.
                        </p>
                        <div className='teamCardLinks'>
                            <a href='https://www.tiktok.com/@jcg00_' target='_blank' rel='noopener noreferrer' className='teamSocial'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                                    <path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z'/>
                                </svg>
                            </a>
                            <a href='https://x.com/JCG00_' target='_blank' rel='noopener noreferrer' className='teamSocial'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                                    <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'/>
                                </svg>
                            </a>
                            <a href='https://www.youtube.com/@JCG00_' target='_blank' rel='noopener noreferrer' className='teamSocial'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                                    <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z'/>
                                </svg>
                            </a>
                            <a href='https://wa.me/541169787999' target='_blank' rel='noopener noreferrer' className='teamBtnContact'>
                                Consultá →
                            </a>
                        </div>
                    </div>
                </article>

                {/* CAROLINA */}
                <article className='teamCard teamCardRE'>
                    <div className='teamCardImgWrap'>
                        <img src='/profile1.png' alt='Carolina Galante' className='teamCardImg' />
                        <div className='teamCardImgOverlay'></div>
                    </div>
                    <div className='teamCardBody'>
                        <div className='teamCardRole teamCardRoleGray'>
                            <span className='roleDot roleDotGray'></span>
                            Real Estate
                        </div>
                        <h3 className='teamCardName'>Carolina<br />Galante</h3>
                        <p className='teamCardTitle'>Asesora Inmobiliaria Matriculada</p>
                        <p className='teamCardDesc'>
                            Especialista en compra, venta e inversión inmobiliaria. Con sólida trayectoria en el mercado de propiedades, acompaña a cada cliente en todo el proceso para que tomen la mejor decisión con confianza.
                        </p>
                        <div className='teamCardLinks'>
                            <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='teamBtnContactGold'>
                                Agendar reunión →
                            </a>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default Presentation;
