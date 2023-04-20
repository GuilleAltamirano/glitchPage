import { IframeComponent } from "../IframeComponent/IframeComponent";
import instagram from "../IconosNav/img/instagram.png";
import facebook from "../IconosNav/img/facebook.png";
import '../../styles/components/FooterItemTwo.css';

export const FooterItemTwo = () => {
    return(
        <div className="containerFooterItemTwo">
            <div className="containerIframe">
                <IframeComponent/>
            </div>
            <div className="containerIMGrrss">
                <img src={facebook} alt="" className="rrssFooter"/>
                <img src={instagram} alt="" className="rrssFooter"/>
            </div>
        </div>
    )
}