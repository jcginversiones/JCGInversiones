import './Services.css';
import SectionDowloads from "./SectionDowloads";
import WhyServices from './WhyServices';


interface ServicesProps{
    id:string;
}

const Services :React.FC <ServicesProps>= ({id}) =>{
    return(
        <section className="services" id={id}>
            <WhyServices/>
            <SectionDowloads/>            
        </section>
    )
}

export default Services;