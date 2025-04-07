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
                        <ButtonAction colorSet={1} text='Pedir asesoria' to='https://wa.me/541169787999?text=Hola%20JCG Inversiones,%20encontré%20tu%20perfil%20a%20través%20de%20la%20web%20y%20me%20interesaba%20saber%20sobre%20tus%20Servicios%20en%20Trading'/>
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