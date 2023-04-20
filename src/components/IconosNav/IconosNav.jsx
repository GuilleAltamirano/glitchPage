import '../../styles/components/iconosNav.css';
import instagram from "../IconosNav/img/instagram.png";
import facebook from "../IconosNav/img/facebook.png";


function IconoNav(props) {
    return (
            <>
                <div className='contenedorRRSS'>
                    <a href="#"><img src={instagram} alt="Logo de Instagram" className='iconoRRSS'/></a>
                    <a href="#"><img src={facebook} alt="Logo de facebook" className='iconoRRSS'/></a>                    
                </div>
                {props.children}
            </>
    )
};

export default IconoNav