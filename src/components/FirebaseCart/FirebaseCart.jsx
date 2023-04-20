import DisabledContext from "antd/lib/config-provider/DisabledContext";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

export const FirebaseCart = () => {
    const [prod, setProd] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db,"items");
            const response = await getDocs(query);
            const docs = response.docs;
            const data = docs.map(doc=>{return{...doc.data(), id:DisabledContext.id}});

            setProd(data);
        }
    },[])
    
    return
}