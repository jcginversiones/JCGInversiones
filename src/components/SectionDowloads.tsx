import CardServices from './CardServices';
import './SectionDowloads.css';

const SectionDowloads : React.FC = () =>{
    return(
        <section className='sectionDowloads' id='descargas'>
            <div className='sDPart1'>
                <h2>No dejes tu dinero estancado</h2>
                <p>
                    Comencemos por lo primero, para invertir en el mercado vas a necesitar tener una cuenta en alguna plataforma oficial.
                    <br/>
                    Para ello te dejo los instructivos más detallados en PDF a dos de las mejores plataformas para que comencemos a trabajar juntos.                    
                </p>
            </div>
            
            
            <div className='sDPart2'>
                <CardServices 
                    title='IOL' 
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nulla nostrum doloribus provident dolores necessitatibus ullam fugiat laboriosam soluta distinctio.' 
                    filePath1='/APERTURA IOL.pdf' 
                    fileName1='IOL APERTURA'
                    filePath2='/REASIGNACION IOL.pdf'
                    fileName2='IOL REASIGNACION'
                    />                 
                
                <CardServices
                title='Balanz' 
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nulla nostrum doloribus provident dolores necessitatibus ullam fugiat laboriosam soluta distinctio.' 
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