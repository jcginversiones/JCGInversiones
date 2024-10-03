import CardServices from './CardServices';
import './SectionDowloads.css';

const SectionDowloads : React.FC = () =>{
    return(
        <section className='sectionDowloads' id='descargas'>
            <div className='sDPart1'>
                <h2>Opera con los mejores Brokers de Argentina</h2>
                <p>
                    Abrí tu cuenta para comprar y vender Bonos, Acciones, Cedears, FCI y más instrumentos de manera totalmente gratuita.
                    <br/>
                    Para ello te dejo los instructivos más detallados en PDF a dos de las mejores plataformas para que comencemos a trabajar juntos.                    
                </p>
            </div>
            
            
            <div className='sDPart2'>
                <CardServices 
                    title='IOL' 
                    description='Fundada en mayo del 2000 y en 2018 fue adquirida por el Grupo Supervielle,Agente de Liquidación y Compensación Integral (ALyCI) Nº 273/CNV,Agente Colocador y Distribuidor Integral de Fondos Comunes de Inversión (ACyDI FCI) Nº 1/CNV' 
                    filePath1='/APERTURA IOL.pdf' 
                    fileName1='IOL APERTURA'
                    filePath2='/REASIGNACION IOL.pdf'
                    fileName2='IOL REASIGNACION'
                    />                 
                
                <CardServices
                title='Balanz' 
                description='Mas de 20 años de experiencia de operador como Agente de Liquidación y Compensación en los mercados BYMA, MAE, MAV y Rofex. Las especies que se operan,son custodiadas por Caja de Valores S.A.' 
                filePath1='/APERTURA BALANZ.pdf' 
                fileName1='BALANZ APERTURA'
                filePath2='/REASIGNACION BALANZ.pdf'
                fileName2='BALANZ REASIGNACION'
                />
            </div>
        </section>
    )
}

export default SectionDowloads;