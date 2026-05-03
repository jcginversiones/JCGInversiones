import './PlanesServices.css';

const PlanesServices: React.FC = () => {
    return (
        <section className='planesServices' id='planes'>
            <div className='planesHeader'>
                <p className='planesTag'>— NUESTROS SERVICIOS —</p>
                <h2 className='planesTittle'>Elegí el plan que más se adapta a vos</h2>
                <p className='planesSubtitle'>Desde asesoramiento gratuito hasta herramientas profesionales de análisis</p>
            </div>

            <div className='planesGrid'>

                {/* PLAN GRATUITO */}
                <article className='planCard planFree'>
                    <div className='planCardTop'>
                        <div className='planBadge planBadgeFree'>GRATUITO</div>
                        <h3 className='planName'>Asesoramiento + Ingecapital PRO</h3>
                        <div className='planPrice'>
                            <span className='planPriceAmount'>$0</span>
                            <span className='planPricePeriod'>/ sin cargo</span>
                        </div>
                        <p className='planDesc'>
                            Accedé a asesoramiento financiero personalizado y a funcionalidades exclusivas de la plataforma Ingecapital PRO sin costo.
                        </p>
                    </div>

                    <ul className='planFeatures'>
                        <li>
                            <span className='planCheck'>✓</span>
                            Asesoramiento financiero personalizado
                        </li>
                        <li>
                            <span className='planCheck'>✓</span>
                            Acceso a Ingecapital PRO (funcionalidades exclusivas)
                        </li>
                        <li>
                            <span className='planCheck'>✓</span>
                            Chat con noticias, alertas e información de mercado
                        </li>
                        <li>
                            <span className='planCheck'>✓</span>
                            Educación financiera y análisis bajo demanda
                        </li>
                        <li>
                            <span className='planCheck'>✓</span>
                            Armado de cartera de inversión personalizada
                        </li>
                        <li>
                            <span className='planCheck'>✓</span>
                            Directos con análisis de diferentes activos
                        </li>
                    </ul>

                    <div className='planActions'>
                        <a 
                            href="https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20comenzar%20con%20el%20asesoramiento%20gratuito" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='planBtn planBtnFree'
                        >
                            Comenzar gratis →
                        </a>
                        <a 
                            href="https://plataformaingecapital.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='planBtnSecondary'
                        >
                            Ver Ingecapital PRO ↗
                        </a>
                    </div>
                </article>

                {/* PLAN DASHBOARD */}
                <article className='planCard planPremium'>
                    <div className='planCardTop'>
                        <div className='planBadge planBadgePremium'>⭐ RECOMENDADO</div>
                        <h3 className='planName'>Dashboard JCG</h3>
                        <div className='planPrice'>
                            <span className='planPriceAmount'>USD 10</span>
                            <span className='planPricePeriod'>/ mes</span>
                        </div>
                        <div className='planPriceAlt'>o USD 100 / año <span className='planSaving'>(ahorrás 2 meses)</span></div>
                        <p className='planDesc'>
                            Accedé a nuestro dashboard profesional con herramientas de análisis avanzadas e incluye una sesión mensual de asesoramiento para revisar tu cartera.
                        </p>
                    </div>

                    <ul className='planFeatures'>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            Todo lo incluido en el plan gratuito
                        </li>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            Acceso completo al Dashboard JCG
                        </li>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            1 sesión mensual de revisión de cartera
                        </li>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            Seguimiento personalizado de tus inversiones
                        </li>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            Alertas y reportes exclusivos del mercado
                        </li>
                        <li>
                            <span className='planCheck planCheckPremium'>✓</span>
                            Soporte prioritario vía WhatsApp
                        </li>
                    </ul>

                    <div className='planActions'>
                        <a 
                            href="https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20suscribirme%20al%20Dashboard%20JCG" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='planBtn planBtnPremium'
                        >
                            Suscribirme ahora →
                        </a>
                        <a 
                            href="https://juancg00ginversiones.github.io/JCGdashboard/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='planBtnSecondary'
                        >
                            Ver Dashboard ↗
                        </a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default PlanesServices;
