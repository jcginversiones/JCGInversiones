import './EmpresasServices.css';

interface EmpresasServicesProps {
    id: string;
}

const servicios = [
    {
        num: '01',
        titulo: 'Fondo de Asistencia Laboral (FAL)',
        desc: 'Toda empresa con empleados debe destinar un porcentaje de sus contribuciones patronales a un fondo a nombre propio y elegir un administrador autorizado por la CNV. Te acompañamos en el proceso completo, sin costo neto real para la empresa.',
        beneficio: 'Sin costo neto — se compensa con la reducción equivalente en contribuciones patronales.',
    },
    {
        num: '02',
        titulo: 'Financiamiento Alternativo',
        desc: 'Cheques de pago diferido, pagarés bursátiles y Obligaciones Negociables como complemento al crédito bancario tradicional. Más opciones para financiar capital de trabajo, con tasas que suelen ser más competitivas que el descuento bancario.',
        beneficio: 'Acceso a fuentes de financiamiento diversificadas, sin depender de una sola entidad.',
    },
    {
        num: '03',
        titulo: 'Ahorro de Costos Operativos',
        desc: 'Las cuentas comitentes están exentas del impuesto a los débitos y créditos. Además, operá eCheqs con mayor flexibilidad que en el circuito bancario tradicional, con trazabilidad completa garantizada.',
        beneficio: 'Reducción de costos por impuesto al cheque en operaciones vía mercado de capitales.',
    },
    {
        num: '04',
        titulo: 'Gestión de Liquidez y Tesorería',
        desc: 'Los excedentes de tu empresa no deberían quedar ociosos. Diseñamos una estrategia de tesorería con instrumentos de distinto plazo y volatilidad, para que la caja rinda mientras espera ser utilizada y los vencimientos fiscales estén cubiertos.',
        beneficio: 'Excedentes invertidos en instrumentos de baja volatilidad: money market, FCI, plazos fijos.',
    },
    {
        num: '05',
        titulo: 'Resguardo Patrimonial en Dólares',
        desc: 'Dolarizá excedentes de la empresa o de los socios vía cuenta comitente, con mayor flexibilidad operativa que el circuito bancario tradicional. Una herramienta simple y regulada para proteger el valor del patrimonio.',
        beneficio: 'Mayor flexibilidad y acceso que el banco para dolarizar excedentes empresariales.',
    },
    {
        num: '06',
        titulo: 'Planificación Patrimonial de Socios',
        desc: 'Distribución de utilidades en acciones liberadas o cuotapartes de FCI, excluidas de la retención del 7% de Impuesto Cedular que aplica a distribuciones en efectivo. Las acciones de sociedades cotizantes también quedan excluidas de Bienes Personales del accionista.',
        beneficio: 'Distribución de utilidades con menor carga fiscal, dentro del marco regulatorio vigente.',
    },
];

const EmpresasServices: React.FC<EmpresasServicesProps> = ({ id }) => {
    return (
        <section className='empresasServices' id={id}>
            <div className='empresasHeader'>
                <p className='empresasEyebrow'>
                    <span className='empresasEyebrowLine'></span>
                    Personas Jurídicas
                </p>
                <h2 className='empresasTitulo'>Mercado de capitales para tu empresa</h2>
                <p className='empresasSubtitulo'>
                    Ejecutado bajo licencia CNV N°2145, vía brokers regulados (Balanz / IOL).
                    Tu empresa accede al mercado de capitales con respaldo profesional y regulado.
                </p>
            </div>

            <div className='empresasGrid'>
                {servicios.map((s) => (
                    <article className='empresaCard' key={s.num}>
                        <div className='empresaCardTop'>
                            <span className='empresaNum'>{s.num}</span>
                            <h3 className='empresaCardTitulo'>{s.titulo}</h3>
                        </div>
                        <p className='empresaCardDesc'>{s.desc}</p>
                        <div className='empresaCardBeneficio'>
                            <span className='empresaBeneficioDot'></span>
                            <p>{s.beneficio}</p>
                        </div>
                        <a
                            href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20consultar%20sobre%20servicios%20para%20empresas'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='empresaCardBtn'
                        >
                            Consultar
                        </a>
                    </article>
                ))}
            </div>

            <div className='empresasFooter'>
                <div className='empresasFooterTexto'>
                    <p className='empresasFooterTitulo'>Consultoría estratégica integral</p>
                    <p className='empresasFooterDesc'>
                        Para automatización de procesos, análisis de negocio y liderazgo organizacional,
                        trabajamos en conjunto con JCG Strategic.
                    </p>
                </div>
                <div className='empresasFooterBtns'>
                    <a
                        href='https://wa.me/541169787999?text=Hola%20JCG%20Inversiones,%20quiero%20hablar%20con%20un%20asesor%20para%20mi%20empresa'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='empresasFooterBtnWpp'
                    >
                        Hablar con un asesor
                    </a>
                    <a
                        href='https://jcgstrategic.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='empresasFooterBtnStrategic'
                    >
                        JCG Strategic
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EmpresasServices;
