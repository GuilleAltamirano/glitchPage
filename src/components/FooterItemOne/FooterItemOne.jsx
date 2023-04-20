import '../../styles/components/FooterItemOne.css';
import logo from "./img/logoFooter.png";
import { Link } from "react-router-dom";

export const FooterItemOne = () => {
    return (
        <div className="ContainerFooterHorarios">
            <h4>Horarios: </h4>
            <p>Martes a Domingo de 19:00 a 23hs</p>
            <p>En Octavio Pintos 3148 - Cordoba Capital</p>
            <Link to='/' className='logoLink'>
                <img src={logo} alt="" className='logoFooter'/>
            </Link>
        </div>

    )
}