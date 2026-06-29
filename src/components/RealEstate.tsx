import './RealEstate.css';

const RealEstate: React.FC = () => {
    return (
        <section className='realEstate' id='realestate'>

            <div className='reHeader'>
                <p className='reEyebrow'>
                    <span className='reEyebrowLine'></span>
                    Real Estate
                </p>
                <h2 className='reTitulo'>Propiedades que trabajan<br />por tu futuro</h2>
                <p className='reSub'>Compra, venta e inversión inmobiliaria con asesoramiento profesional en cada etapa.</p>
            </div>

            <div className='reCardsGrid'>

                <article className='reCard'>
                    <div className='reCardImg'>
                        <img src='/re-inversion.png' alt='Inversión Inmobiliaria' />
                        <div className='reCardOverlay'></div>
                    </div>
                    <div className='reCardContent'>
                        <span className='reCardTag'>01 — Inversión</span>
                        <h3 className='reCardTitle'>Inversión<br />Inmobiliaria</h3>
                        <p className='reCardDesc'>Identificamos las oportunidades con mayor potencial de rentabilidad para que tu capital crezca en el mercado correcto.</p>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20me%20interesa%20invertir%20en%20inmuebles' target='_blank' rel='noopener noreferrer' className='reCardBtn'>
                            Consultar →
                        </a>
                    </div>
                </article>

                <article className='reCard'>
                    <div className='reCardImg'>
                        <img src='/re-compra.png' alt='Compra de Departamentos' />
                        <div className='reCardOverlay'></div>
                    </div>
                    <div className='reCardContent'>
                        <span className='reCardTag'>02 — Compra</span>
                        <h3 className='reCardTitle'>Compra de<br />Departamentos</h3>
                        <p className='reCardDesc'>Te acompañamos en todo el proceso para que tomes la mejor decisión con información clara y criterio profesional.</p>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20comprar%20un%20departamento' target='_blank' rel='noopener noreferrer' className='reCardBtn'>
                            Consultar →
                        </a>
                    </div>
                </article>

                <article className='reCard'>
                    <div className='reCardImg'>
                        <img src='/re-venta.png' alt='Venta de Propiedades' />
                        <div className='reCardOverlay'></div>
                    </div>
                    <div className='reCardContent'>
                        <span className='reCardTag'>03 — Venta</span>
                        <h3 className='reCardTitle'>Venta de<br />Propiedades</h3>
                        <p className='reCardDesc'>Estrategia y acompañamiento profesional para vender tu propiedad al mejor precio y en el menor tiempo posible.</p>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20vender%20mi%20propiedad' target='_blank' rel='noopener noreferrer' className='reCardBtn'>
                            Consultar →
                        </a>
                    </div>
                </article>

            </div>

            <div className='reCTA'>
                <p className='reCTAText'>¿Querés saber más sobre nuestros servicios inmobiliarios?</p>
                <div className='reCTABtns'>
                    <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='reBtnGold'>
                        📅 Agendar reunión
                    </a>
                    <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20me%20interesa%20el%20servicio%20de%20Real%20Estate' target='_blank' rel='noopener noreferrer' className='reBtnWpp'>
                        WhatsApp
                    </a>
                </div>
            </div>

        </section>
    );
};

export default RealEstate;
