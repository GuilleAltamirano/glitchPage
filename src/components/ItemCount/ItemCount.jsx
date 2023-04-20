import '../../styles/components/ItemCount.css'
import {useState} from 'react'

export const ItemCount = ({onAdd}) => {
    let [contador, setContador] = useState(1);
    
    let sumar = () => {
        setContador(contador + 1);
    };

    let restar = () => {
        if (contador <= 1) {
            alert("No puedes agregar menos de 1 producto");
        }else {
            setContador(contador - 1);
        }
    };
    
    return (
        <>
            <div className='pb-4'>
                <div className="containerContador opacity-50">
                        <button onClick={sumar} className="buttonItemCount">+</button>
                        <p className='contadorItemCount'>{contador}</p>
                        <button onClick={restar} className="buttonItemCount">-</button>
                </div>
            </div>
            <button className="agregarCarritoBT" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        </>
    )
}