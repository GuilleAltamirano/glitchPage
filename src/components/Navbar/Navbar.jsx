import '../../styles/components/navbar.css'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { NavLink,Link } from "react-router-dom";
import { useState } from 'react';


export function Navbar() {
    const [state, setState] = useState(false);
    
    const detectScroll = () => {
        return window.addEventListener("scroll", conditionScroll);
    }

    const conditionScroll = () => {
        if (window.scrollY > 10){
            setState(true);
        }else {
            setState(false);
        }
    }
    detectScroll()

    return (
        <>
            {
                state ?
                
                <nav className="navbarActived">
                    <Link to='/' className='logoLink'>
                        <img src={logo} alt="" className='logoActived'/>
                    </Link>
                    <div>
                        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/conocenos'> Conocenos </NavLink>
                        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/productos'>Productos</NavLink>
                        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/pedir'>Pedir</NavLink>
                        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/contacto'>Contacto</NavLink>
                    </div>
                </nav>

                :
                
                <div>
                    <IconosNav/>
                    <nav className="navbarInactive">
                        <NavLink className={({isActive})=>isActive ? "claseActiveTwo": "claseInactive"} to='/conocenos'> Conocenos </NavLink>
                        <NavLink className={({isActive})=>isActive ? "claseActiveTwo": "claseInactive"} to='/productos'>Productos</NavLink>
                        <Link to='/' className='logoLink'>
                            <img src={logo} alt="" className='logoInactive'/>
                        </Link>
                        <NavLink className={({isActive})=>isActive ? "claseActiveTwo": "claseInactive"} to='/pedir'>Pedir</NavLink>
                        <NavLink className={({isActive})=>isActive ? "claseActiveTwo": "claseInactive"} to='/contacto'>Contacto</NavLink>
                    </nav>
                </div>
            }
        </>
    )
};