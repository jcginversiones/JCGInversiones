import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import RealEstate from './components/RealEstate';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Header id="header" />
            <Services id="services" />
            <RealEstate />
            <Presentation id="presentation" />
            <Contact id="contact" />
        </>
    )
}

export default App;
