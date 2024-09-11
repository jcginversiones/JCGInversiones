import ButtonAction from './ButtonAction';
import './Contact.css';
import RedesContact from './RedesContact';


const Contact : React.FC = () =>{
    return(
        <div className='contact'>

            <img src="/phone.png" alt="" />

            <section className='contactContainer'>
                <article className='contentIvite'>
                        <h3>Coordinemos una entrevista</h3>
                        <p className='cTextInvite'>
                            Para guiarte en todo este proceso, me interesa que te sientas acompañado. Te invito a que tengamos una reunión y podamos trazar en conjunto un plan que se adapte a tus necesidades.
                            <br />
                            En nuestra comunidad hay gente como vos, y entre todos construimos el futuro que buscamos    
                        </p>
                        <div className='cButtons'>
                            <ButtonAction colorSet={1} text='Enviame un Whatsapp'/>
                            <ButtonAction colorSet={3} text='Enviame un Mail'/>
                        </div>
                </article>                
                <RedesContact/>
            </section>

            
            
        </div>
    )
}


export default Contact;