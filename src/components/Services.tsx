import './Services.css';
import SectionDowloads from "./SectionDowloads";
import WhyServices from './WhyServices';


const Services :React.FC = () =>{
    return(
        <section className="services">
            <WhyServices/>
            <SectionDowloads/>
            
        </section>
    )
}

export default Services;