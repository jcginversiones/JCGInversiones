import GridItem from './GridItem';
import './WhyServices.css';

const WhyServices: React.FC = () =>{
    return(
        <article className='whyServices'>
            <h3>Conoce los beneficios de contratar la Asesoría</h3>
            <div className='wsGrid'>
                <GridItem text='Chat con Información, Noticias y Alertas'/>
                <GridItem text='Educación Financiera'/>
                <GridItem text='Asesoramiento Personalizado'/>
                <GridItem text='Armado de carteras de inversión'/>
                <GridItem text='Análisis Bajo Demanda'/>
                <GridItem text='Directos con análisis de diferentes activos'/>
            </div>
        </article>
    )
}

export default WhyServices;