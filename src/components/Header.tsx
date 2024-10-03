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
                    <h2 className='hSTittle'>Alcanza la libertad financiera que buscabas y transforma tu futuro</h2>
                    <p className='hSText2'>Hace crecer tu Patrimonio con asesoría de Trading Personalizada. Invertir inteligentemente es posible</p>

                    <div className='hSButtons'>
                        <ButtonAction  text='Pedir asesoria' colorSet={1} to='#contact' />
                        <ButtonAction  text='Descargar Instructivos' colorSet={3} to='#services  ' />
                    </div>
                </section>

                <section className='headerSection2'>
                    <img src="/forex.png" alt="Finanzas Inteligentes" />
                </section>
            </div>

            <p className='headerFinalText'>Licencia para operar en la bolsa expedida por <span> Lorem Ipsum</span></p>

        </header>
    )
}

export default Header