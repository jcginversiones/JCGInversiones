import ButtonAction from './ButtonAction';
import './Header.css';

const Header : React.FC = () =>{
    return(
        <header className='header'>
            <div className='headerContent'>
                <section className='headerSection1'>
                    <p className='hSText1'>- INSTRUCTIVOS INCLUIDOS -</p>
                    <h2 className='hSTittle'>Alcanza la libertad financiera que buscabas y transforma tu futuro</h2>
                    <p className='hSText2'>Hace crecer tu Patrimonio con asesoría de Trading Personalizada. Invertir inteligentemente es posible</p>

                    <div className='hSButtons'>
                        <ButtonAction  text='Pedir asesoria' colorSet={1} />
                        <ButtonAction  text='Descargar Instructivo' colorSet={3} />
                    </div>
                </section>

                <section className='headerSection2'>
                    <img src="https://capex.com/lat/online-trading/wp-content/uploads/sites/24/asset-platform1.png" alt="Finanzas Inteligentes" />
                </section>
            </div>

            <p className='headerFinalText'>Licencia para operar en la bolsa expedida por <span> Lorem Ipsum</span></p>

        </header>
    )
}

export default Header