import './ButtonAction.css';

type btn = "button" | "submit" | "reset" | undefined;
interface ButtonActionProps {
    to?: string;
    fn?: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    colorSet: number;
    type?: btn;
    deshabilitado?: boolean;
    loader?:boolean;
  }

const ButtonAction : React.FC<ButtonActionProps> = ({ to, fn, text, colorSet, type, deshabilitado, loader }) =>{
    const typeOfButton = type?type:"button";
    let color;
  
    switch (colorSet) {
      case 1:
        color="buttonAction action1";
        break;
  
      case 2:
        color="buttonAction action2";
        break;
  
      case 3:
        color="buttonAction action3";
        break;
        
      default:
        color="buttonAction";
        break;
    }  
  
    
  
    if(to){
      //SI RECIBE EL PARAMETRO "TO", FUNCIONA COMO UN "LINK"
    return (
      <link href={to} className={color}>
          {text}
      </link>
    )
    }else if(fn){
      //SI RECIBE EL PARAMETRO "FN", FUNCIONA COMO UN "ONCLICK"
    return (
      <button className={color} onClick={fn} type={typeOfButton} disabled={deshabilitado}>
        {text}
      </button>
      );
    }
  
    return(
        //SI EJECUTA UNA ACCION, DISPARA EL LOADER Y SE DESABILITA HASTA NUEVO AVISO"
      <button className={color} type={typeOfButton} disabled={deshabilitado}>
        {
        loader ? 
          <span className="loaderContainer">
            <svg className="loadingState" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
              <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
            </svg>     
          </span>
          : text
        }
        
      </button>
    );
}

export default ButtonAction;