import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useContext, useState  } from "react";
import { CartContext } from "../../context/CartContext";
import ReCAPTCHA from "react-google-recaptcha";
import '../../styles/components/Form.css'

export const Form = () => {
    const [idOrder, setIdOrder] = useState("");
    const {productCartList} = useContext(CartContext);
    const [verificacion, setVerificacion] = useState(false)
    
    const sendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name: e.target[0].value,
                surname: e.target[1].value,
                telefono: e.target[2].value,
                email: e.target[4].value,
            },
            producs: {
                productCartList
            }
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));
    }

    function onChange() {
        setVerificacion(true);
    }

    return(
        <form onSubmit={sendOrder} className="containerForm">
            <input type="text" placeholder="Nombre" className="inputForm"/>
            <input type="text" placeholder="Apellido" className="inputForm"/>
            <input type="text" placeholder="Telefono" className="inputForm"/>
            <input type="email" placeholder="Email" className="inputForm"/>
            <div className="reCaptcha">
            <ReCAPTCHA
                sitekey="6LddXX8iAAAAAP_mqXG4SRMCxbnyWv8EZLv5XggZ"
                onChange={onChange}
                className='reCaptcha'
            />
            </div>
            <button type="submit" disabled={!verificacion} className="buttonComprar">
                enviar orden
            </button>
        </form>
    )
}