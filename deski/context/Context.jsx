'use client'


import { productData } from "@/data/products";
import React from "react";
import { useContext ,useState , useEffect } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {

    return useContext(dataContext);
  };

  export default function Context({ children }) {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

   

    const addProductToCart = (id)=>{

        if (!cartProducts.filter((elm)=>elm.id == id)[0]) {

           const item = {...productData.filter(elm=>elm.id == id)[0],quantity:Number(document.getElementById('productQuantity').value)}
           setCartProducts(pre=>[...pre,item])
            
        }

    }
    const isAddedToCartProducts = (id)=>{
        if (cartProducts.filter((elm)=>elm.id == id)[0]) {
            return true
         }
         return false

    }
    useEffect(() => {
        const sum = cartProducts.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.quantity;
        }, 0);
        setTotalPrice(sum);
      }, [cartProducts]);
   


    const contextElement = {
        
        cartProducts,
        setCartProducts,
        addProductToCart,
        isAddedToCartProducts,
        totalPrice
      };
    return (
        <dataContext.Provider value={contextElement}>{children}</dataContext.Provider>
      );
  }