import './GridItem.css';

interface GridItemProp{
    text:string
}

const GridItem : React.FC<GridItemProp> = ({text}) =>{
    return(
        <div className="gridItem">
            <p><span>● </span>{text}</p>
        </div>
    )
}

export default GridItem;