import ButtonAction from './ButtonAction';
import './Contact.css';
import RedesContact from './RedesContact';


interface ContactProp {
    id:string
}

const Contact : React.FC <ContactProp> = ({id}) =>{
    return(
        <div className='contact' id={id}>
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
                            <ButtonAction colorSet={1} text='Enviame un Whatsapp' to='https://wa.me/541121763182?text=Hola%20Juan,%20encontré%20tu%20perfil%20a%20través%20de%20la%20web%20y%20me%20interesaba%20saber%20sobre%20tus%20Servicios%20en%20Trading'/>
                            <ButtonAction colorSet={3} text='Enviame un Mail' to='mailto:info@gstint.com.ar?subject=Consulta%20desde%20Web' />
                        </div>
                </article>                
                <RedesContact/>
            </section>           
        </div>
    )
}


export default Contact;