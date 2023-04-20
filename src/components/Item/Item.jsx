import { Link } from 'react-router-dom';
import '../../styles/components/Item.css';

export const Item = ({items}) => {
    return (
        <div>
            
                <div key={items.name} className="containerItem">
                    <img src={items.img} alt="Imagen de producto" className='imgItem'/>
                    <h4 className='titleItem'>{items.title}</h4>
                    <p>precio: ${items.precio}</p>
                    <Link key={items.id} to={`/Productos/${items.id}`} className="linkBotonItem">
                        <button className='botonItem'>Saber mas</button>
                    </Link>
                </div>         
        </div>
    )
}
