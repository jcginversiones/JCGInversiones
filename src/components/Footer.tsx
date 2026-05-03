import './Footer.css';

const Footer : React.FC = () =>{
    return(
        <footer className='footerSection'>
            <div className='footerEcosystem'>
                <a href="https://jcgstrategic.com" target="_blank" rel="noopener noreferrer" className='footerEcoLink footerEcoStrategic'>
                    JCG Strategic ↗
                </a>
                <span className='footerDivider'>·</span>
                <a href="https://plataformaingecapital.com/" target="_blank" rel="noopener noreferrer" className='footerEcoLink'>
                    Plataforma Ingecapital ↗
                </a>
                <span className='footerDivider'>·</span>
                <a href="https://juancg00ginversiones.github.io/JCGdashboard/" target="_blank" rel="noopener noreferrer" className='footerEcoLink'>
                    Dashboard ↗
                </a>
            </div>
            <p className='footerCredits'>Diseñado y Desarrollado por @/oidmortvles</p>
        </footer>
    )    
}

export default Footer;
