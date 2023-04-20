import { Link } from "react-router-dom";
import entradas from "../../images/Secciones/entradas.png";
import combos from '../../images/Secciones/combos.png';
import gohan from '../../images/Secciones/gohan.png';
import '../../styles/components/SectionOfrecemos.css';

export const SectionOfrecemos = () => {
    return (
        <section className="bg-black sectionOfrecemos">
            <h2>¿Que Ofrecemos?</h2>
            <p>Explorá nuestro mundo en un recorrido lleno de colores y sentidos. Esta es nuestra propuesta gastronómica.</p>
            <div className="divContainerOfrecemos">
                <Link to='/categoria/entradas'><img src={entradas} alt="" /></Link>
                <Link to='/categoria/combos'><img src={combos} alt="" /></Link>
                <Link to='/categoria/gohan'><img src={gohan} alt="" /></Link>
            </div>
        </section>
    )
}