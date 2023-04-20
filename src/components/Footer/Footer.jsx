import { FooterItemOne } from "../FooterItemOne/FooterItemOne";
import '../../styles/components/Footer.css';
import { FooterItemTwo } from "../FooterItemTwo/FooterItemTwo";


export const Footer = () => {
    return (
        <div>
            <footer className="ContainerFooter">
                <h2>Explora Nuestros Sabores</h2>
                <div className="containerFootersItems">
                    <FooterItemOne />
                    <FooterItemTwo />
                </div>
            
            </footer>
            <p className="bg-black">© 2022 | Todos los derechos reservado a Shurima Sushi & Wok.</p>
        </div>
    )
}