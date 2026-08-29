import './PlanesServices.css';

interface PlanesServicesProps {
    id: string;
}

const PlanesServices: React.FC<PlanesServicesProps> = ({ id }) => {
    return (
        <section className='planesServices' id={id}>
            <div className='planesHeader'>
                <p className='planesEyebrow'>
                    <span className='planesEyebrowLine'></span>
                    Personas Físicas
                </p>
                <h2 className='planesTittle'>Elegí el plan que más se adapta a vos</h2>
                <p className='planesSubtitle'>Desde asesoramiento gratuito hasta herramientas profesionales de análisis e inversión inmobiliaria.</p>
            </div>

            <div className='planesGrid'>

                <article className='planCard'>
                    <div className='planCardTop'>
                        <p className='planCatLabel'>Mercado de Capitales</p>
                        <div className='planBadge planBadgeFree'>Gratuito</div>
                        <h3 className='planName'>Asesoramiento + Ingecapital PRO</h3>
                        <div className='planPrice'>
                            <span className='planPriceAmount'>$0</span>
                            <span className='planPricePeriod'>/ sin cargo</span>
                        </div>
                        <p className='planDesc'>Asesoramiento financiero personalizado y acceso a funcionalidades exclusivas de la plataforma Ingecapital PRO.</p>
                    </div>
                    <ul className='planFeatures'>
                        <li><span className='planCheck'>—</span>Asesoramiento personalizado</li>
                        <li><span className='planCheck'>—</span>Acceso a Ingecapital PRO</li>
                        <li><span className='planCheck'>—</span>Chat con noticias y alertas de mercado</li>
                        <li><span className='planCheck'>—</span>Armado de cartera de inversión</li>
                        <li><span className='planCheck'>—</span>Directos con análisis de activos</li>
                    </ul>
                    <div className='planActions'>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20el%20asesoramiento%20gratuito' target='_blank' rel='noopener noreferrer' className='planBtn planBtnFree'>
                            Comenzar gratis
                        </a>
                        <a href='https://plataformaingecapital.com/' target='_blank' rel='noopener noreferrer' className='planBtnSecondary'>
                            Ver Ingecapital PRO
                        </a>
                    </div>
                </article>

                <article className='planCard planPremium'>
                    <div className='planCardTop'>
                        <p className='planCatLabel'>Mercado de Capitales</p>
                        <div className='planBadge planBadgePremium'>Recomendado</div>
                        <h3 className='planName'>Dashboard JCG</h3>
                        <div className='planPrice'>
                            <span className='planPriceAmount'>USD 10</span>
                            <span className='planPricePeriod'>/ mes</span>
                        </div>
                        <div className='planPriceAlt'>o USD 100 / año <span className='planSaving'>(ahorrás 2 meses)</span></div>
                        <p className='planDesc'>Dashboard profesional con herramientas avanzadas. Incluye una sesión mensual de revisión de cartera.</p>
                    </div>
                    <ul className='planFeatures'>
                        <li><span className='planCheck planCheckPremium'>—</span>Todo el plan gratuito incluido</li>
                        <li><span className='planCheck planCheckPremium'>—</span>Acceso completo al Dashboard JCG</li>
                        <li><span className='planCheck planCheckPremium'>—</span>1 sesión mensual de revisión de cartera</li>
                        <li><span className='planCheck planCheckPremium'>—</span>Alertas y reportes exclusivos</li>
                        <li><span className='planCheck planCheckPremium'>—</span>Soporte prioritario vía WhatsApp</li>
                    </ul>
                    <div className='planActions'>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20suscribirme%20al%20Dashboard' target='_blank' rel='noopener noreferrer' className='planBtn planBtnPremium'>
                            Suscribirme
                        </a>
                        <a href='https://juancg00ginversiones.github.io/JCGdashboard/' target='_blank' rel='noopener noreferrer' className='planBtnSecondary'>
                            Ver Dashboard
                        </a>
                    </div>
                </article>

                <article className='planCard planRE'>
                    <div className='planCardTop'>
                        <p className='planCatLabel planCatRE'>Real Estate</p>
                        <div className='planBadge planBadgeRE'>Inmobiliario</div>
                        <h3 className='planName'>Asesoramiento Inmobiliario</h3>
                        <div className='planPrice'>
                            <span className='planPriceConsultar'>A consultar</span>
                        </div>
                        <p className='planDesc'>Asesoramiento profesional para compra, venta e inversión inmobiliaria. Acompañamiento en cada etapa del proceso.</p>
                    </div>
                    <ul className='planFeatures'>
                        <li><span className='planCheck planCheckRE'>—</span>Compra de departamentos</li>
                        <li><span className='planCheck planCheckRE'>—</span>Venta de propiedades</li>
                        <li><span className='planCheck planCheckRE'>—</span>Inversión inmobiliaria estratégica</li>
                        <li><span className='planCheck planCheckRE'>—</span>Análisis de mercado inmobiliario</li>
                        <li><span className='planCheck planCheckRE'>—</span>Acompañamiento en todo el proceso</li>
                    </ul>
                    <div className='planActions'>
                        <a href='https://cal.com/jcgstrategic/jcginversiones' target='_blank' rel='noopener noreferrer' className='planBtn planBtnRE'>
                            Agendar reunión
                        </a>
                        <a href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20me%20interesa%20el%20servicio%20de%20Real%20Estate' target='_blank' rel='noopener noreferrer' className='planBtnSecondary'>
                            Consultar por WhatsApp
                        </a>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default PlanesServices;
