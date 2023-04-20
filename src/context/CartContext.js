import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext('Mi primer contexto');

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id) => {
        const elementExists = productCartList.some((elemento) => elemento.id === id);
        return elementExists;
    }
    
    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
            setProductCartList(newList)
        } else{
            const newProduct={...product, quantity:qty, totalPrice: qty*product.precio}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);

        }
    }

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList = () => {
        setProductCartList([]);
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);    
        return totalProducts;
    }

    return (
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearProductCartList, isInCart, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}