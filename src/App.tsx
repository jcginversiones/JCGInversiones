import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {

  return (
    <>
      <Header id="header" />
      <Presentation id="presentation" />
      <Services id="services" />
      <Contact id="contact" />
    </>
  )
}

export default App
