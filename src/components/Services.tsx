import './Services.css';
import SectionDowloads from "./SectionDowloads";
import WhyServices from './WhyServices';
import PlanesServices from './PlanesServices';

interface ServicesProps{
    id:string;
}

const Services :React.FC <ServicesProps>= ({id}) =>{
    return(
        <section className="services" id={id}>
            <PlanesServices/>
            <WhyServices/>
            <SectionDowloads/>            
        </section>
    )
}

export default Services;
