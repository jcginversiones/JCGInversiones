import GridItem from './GridItem';
import './WhyServices.css';

const WhyServices: React.FC = () =>{
    return(
        <article className='whyServices'>
            <h3>Beneficios de contratar la Asesoría</h3>
            <div className='wsGrid'>
                <GridItem text='Chat de Trading'/>
                <GridItem text='Educación Financiera'/>
                <GridItem text='Asesoria Personal'/>
                <GridItem text='Contenido Privado'/>
                <GridItem text='Análisis Bajo Demanda'/>
                <GridItem text='Vivos semanales'/>
            </div>
        </article>
    )
}

export default WhyServices;