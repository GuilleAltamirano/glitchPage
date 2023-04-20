import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../styles/components/iconosFlotantes.css'
import carrito from "../IconosFlotantes/img/carrito.png";
import whatsapp from "../IconosFlotantes/img/whatsapp.png";

function IconosFlotantes() {
    const {getTotalProducts, productCartList} = useContext(CartContext);
    
    return (
        <>
            {
                productCartList.length>0 ? 

                <div>
                    <Link to="/cart" className='containerCarrito'>
                        <span className='totalCarrito'>{getTotalProducts()}</span>
                        <img src={carrito} alt="Logo de carrito de compras" className='carrito'/>
                    </Link>
                </div>

                :

                <Link to="/cart" className='containerCarrito'>
                    <img src={carrito} alt="Logo de carrito de compras" className='carrito'/>
                </Link>
            }
            <a href="#" ><img src={whatsapp} alt="Logo de whatsapp" className='whatsapp'/></a>
        </>
    )
};

export default IconosFlotantes;