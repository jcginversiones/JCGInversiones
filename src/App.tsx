import './App.css';
import Header from './components/Header';
import PlanesServices from './components/PlanesServices';
import EmpresasServices from './components/EmpresasServices';
import RealEstate from './components/RealEstate';
import Presentation from './components/Presentation';
import SectionDowloads from './components/SectionDowloads';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Header id="header" />
            <PlanesServices id="services" />
            <EmpresasServices id="empresas" />
            <RealEstate />
            <SectionDowloads />
            <Presentation id="presentation" />
            <Contact id="contact" />
        </>
    )
}

export default App;
