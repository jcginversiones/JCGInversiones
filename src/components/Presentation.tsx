import ButtonAction from './ButtonAction';
import './Presentation.css';

interface PresentationProps {
    id: string;
  }

const Presentation : React.FC<PresentationProps> = ({id}) =>{
    return(
        <section className='presentation' id={id}>            
            <img src="/profile.png" alt="Trader a cargo Juan Giacovino" />
            <article className='pProfile'>
                <div className='pTrader'>
                    <p>- Asesor Financiero Agente Productor CNV N°2145-</p>
                    <h2 className='pName'>Juan Cruz Giacovino</h2>
                </div>

                <p className='pDescription'>
                    Soy Juan agente productor CNV certificado y estudiante de último año de ingeniería en la Universidad de Buenos Aires, con experiencia laboral en grandes compañías como YPF y Edenor. Mi formación técnica y mi pasión por los mercados financieros me han permitido desarrollarme como analista técnico, analizando gráficos y tendencias para identificar las mejores oportunidades de inversión. Con varios años de experiencia, ofrezco asesoría financiera personalizada y fácil de entender, ayudando a las personas a alcanzar sus metas financieras. 
                    <br/>
                    <br/>
                    <span>Mi objetivo es hacer que las inversiones sean accesibles y claras, guiándote hacia un futuro financiero exitoso</span>
                </p>
                
                <div className='pRedes'>
                        <a href="https://www.tiktok.com/@jcg00_" target='_blank' className='pRedItem'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                            </svg>
                        </a>


                        <a href="https://x.com/JCG00_?t=xwRyj_peqeKBYEklQeRKag&s=08" target='_blank' className='pRedItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                        </a>


                        <a href=" https://www.youtube.com/@JCG00_" target='_blank' className='pRedItem'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                        
                        <ButtonAction colorSet={1} text='Asesoría sin cargo' to='https://wa.me/541169787999?text=Hola%20JCG Inversiones,%20encontré%20tu%20perfil%20a%20través%20de%20la%20web%20y%20me%20interesaba%20saber%20sobre%20tus%20Servicios%20en%20Trading'/>
                </div>
            </article>

        </section>
    )
}

export default Presentation;