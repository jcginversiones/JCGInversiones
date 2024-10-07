import ButtonAction from './ButtonAction';
import './CardServices.css';


interface CardServicesProps{
    title:string;
    img:string;
    description:string;
    filePath1:string;
    fileName1:string;
    filePath2:string;
    fileName2:string;
}

const CardServices : React.FC<CardServicesProps> = ({title, img, description,filePath1,fileName1, filePath2, fileName2}) =>{

    /* Primer Boton */
    const handleDownload1 = () => {
        const fileUrl = filePath1;
        const fileName = fileName1;
    
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
    
        // Añadir el enlace al cuerpo del documento y hacer clic en él
        document.body.appendChild(link);
        link.click();
    
        // Eliminar el enlace del DOM
        document.body.removeChild(link);
      };


      /* segundo Boton */
      const handleDownload2 = () => {
        const fileUrl = filePath2;
        const fileName = fileName2;
    
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
    
        // Añadir el enlace al cuerpo del documento y hacer clic en él
        document.body.appendChild(link);
        link.click();
    
        // Eliminar el enlace del DOM
        document.body.removeChild(link);
      };





    return(
        <article className="cardServices">
            <header className='cServiceHeader'>
                <img src={img} alt="Logo de Broker" />
                <h3>{title}</h3>
            </header>
            <p>{description}</p>
            <div className='csButtons'>
                <ButtonAction colorSet={1} text='Abrir Cuenta' fn={handleDownload1}/>
                <ButtonAction colorSet={3} text='Ya tengo Cuenta' fn={handleDownload2}/>
            </div>


        </article>
    )
}

export default CardServices;