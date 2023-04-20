import { React } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";
import "../../styles/components/CartContainer.css";


export const CartContainer = () => {
    const {productCartList, deleteProduct, clearProductCartList} = useContext(CartContext);

    return (
        <div className="bg-black sectionCartContainer">
            <h2>cart container</h2>

            <div className="bg-black">
                {
                    productCartList.length>0 ?
                    <>
                        <div className="containerMapProduct">
                            {
                                productCartList.map(item => (
                                    <div className="containerProductCart" key={item}>
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                        <p>Precio: $ {item.precio}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio total: $ {item.totalPrice}</p>
                                        <div className='divButtonDeleteProduct'>
                                            <button onClick={()=>deleteProduct(item.id)} className='buttonDeleteProduct'>Eliminar producto</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="containerFormCart">
                            <Form/>
                            <button onClick={clearProductCartList} className='buttonLimpiarCart'>Limpiar Carrito</button>
                        </div>
                    </>

                    :

                    <p>No hay productos agregados</p>
                }
            </div>
        </div>
    )
}