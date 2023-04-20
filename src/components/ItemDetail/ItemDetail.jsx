import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../../styles/components/ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const ItemDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0)
    
    let onAdd = (contador) => {
        const newProduct = {...data, quantity:contador};
        addProduct(newProduct, contador);
        setQuantity(contador);
    }

    useEffect (() => {
        let queryRef = doc(db, "items", productId);
        getDoc(queryRef).then(response => {
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            setData(newDoc)
            setLoading(false)
        })
    }, [productId])
    
    return ( 
        <div>
        {
            loading ? <h2>Cargando...</h2>

            :

            <div className="containerItemDetail">
                <div className="ItemDetail">
                    <div>
                        <img src={data.img} alt="" className="imgItemDetail"/>
                    </div>
                    <div>
                        <h3 className="titleItemDetail">{data.title}</h3>
                        <p>{data.description}</p>
                        <p>Precio ${data.precio}</p>
                        <ItemCount onAdd={onAdd}/>
                        {
                            quantity >= 1 && 
                            <Link to="/cart"> 
                                <button className="buttonCarritoDetail">Ir al carrito</button> 
                            </Link>
                        }
                    </div>
                </div>
            </div>
        }
        </div>
    )
}