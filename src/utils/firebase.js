import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdUdIvTh3WfY6PlXMKWMJmSuP-OzBC56M",
    authDomain: "shurimasushi-2686f.firebaseapp.com",
    projectId: "shurimasushi-2686f",
    storageBucket: "shurimasushi-2686f.appspot.com",
    messagingSenderId: "678706515113",
    appId: "1:678706515113:web:532205e84a3f37d4c56db8",
    measurementId: "G-L31LZNF37D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
