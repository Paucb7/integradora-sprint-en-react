export default function Boton ({clickHandle, name}){
    
    const handleClick = () => clickHandle(name)
    
    return(
        <div>
            <button onclick={handleClick}>{name}</button>
        </div>
    )
}