import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



export const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getData = async ()=> {
            try {
                let queryRef = !categoria ? collection(db, "items") : query(collection(db, "items"), where("categoria", "==", categoria));
                
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                        
                    }
                    return newDoc;
                    
                });
                setProductos(datos);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        getData();
    }, [categoria]);
    
    return (
        <div>
            {
                loading === true ?
                    <p>cargando...</p>
                
                :

                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper">
                            {
                                productos.map(producto => (
                                    <SwiperSlide><Item items={producto}/></SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
            }
        </div>
    )
}


