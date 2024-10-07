import ButtonAction from './ButtonAction';
import './Header.css';


interface HeaderProps {
    id: string;
  }

const Header : React.FC<HeaderProps> = ({ id }) =>{
    return(
        <header className='header' id={id}>
            <div className='headerContent'>
                <section className='headerSection1'>
                    <p className='hSText1'>- SUMATE A NUESTRA COMUNIDAD -</p>
                    <h2 className='hSTittle'>Toma las mejores decisiones de inversión, acompañado de un Profesional</h2>
                    <p className='hSText2'>Análisis detallados y herramientas profesionales para ayudarte a maximizar tus rendimientos</p>

                    <div className='hSButtons'>
                        <ButtonAction  text='Pedir asesoria' colorSet={1} to='#contact' />
                        <ButtonAction  text='Conoce nuestros Servicios' colorSet={3} to='#services  ' />
                    </div>
                </section>

                <section className='headerSection2'>
                    <img src="/forex.png" alt="Finanzas Inteligentes" />
                </section>
            </div>

            <p className='headerFinalText'>ASESOR FINANCIERO AGENTE PRODUCTOR CNV N°2145</p>

        </header>
    )
}

export default Header