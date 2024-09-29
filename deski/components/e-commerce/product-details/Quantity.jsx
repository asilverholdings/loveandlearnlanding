

'use client'

import { useContextElement } from "@/context/Context";
import React from "react";

const Quantity = ({data}) => {

  const { cartProducts, setCartProducts , isAddedToCartProducts } = useContextElement();

  const handleIncrease = () => {
const productQuantity = document.getElementById('productQuantity')
productQuantity.value = Number(productQuantity.value) + 1
    if (isAddedToCartProducts(data.id) ) {
      
       const cartItem = cartProducts.filter((elm)=>elm.id == data.id)[0]
    const itemIndex = cartProducts.indexOf(cartItem)
    const item = cartProducts[itemIndex];

    item.quantity += 1;
    const updated = [...cartProducts];
    updated[itemIndex] = item;
    

    setCartProducts(updated);
    }
  };
  const handleQuantity = (e) => {
    if (isAddedToCartProducts(data.id)) {
      const cartItem = cartProducts.filter((elm)=>elm.id == data.id)[0]
    const itemIndex = cartProducts.indexOf(cartItem)
    const item = cartProducts[itemIndex];
    item.quantity = Number(e.target.value);
    const updated = [...cartProducts];
    updated[itemIndex] = item;

    setCartProducts(updated);
    }
  }
  const handleDecrease = () => {
    const productQuantity = document.getElementById('productQuantity')
     productQuantity.value = Number(productQuantity.value) - 1
    if (isAddedToCartProducts(data.id)) {
     
      const cartItem = cartProducts.filter((elm)=>elm.id == data.id)[0]
      
  
    const itemIndex = cartProducts.indexOf(cartItem)
    const item = cartProducts[itemIndex];

    if (item.quantity > 1) {
      item.quantity -= 1;
      const updated = [...cartProducts];
      updated[itemIndex] = item;
     

      setCartProducts(updated);
    }  }
  };
  return (
    <div className="button-group">
      <ul className="style-none d-flex align-items-center">
        <li>
          <button onClick={()=>handleDecrease()} className="value-decrease">-</button>
        </li>
        <li>
          <input
            type="number"
            min="1"
      
            defaultValue={cartProducts.filter((elm)=>elm.id == data.id)[0]  ? cartProducts.filter((elm)=>elm.id == data.id)[0].quantity : "1"}
            id="productQuantity"

      
            onChange={handleQuantity}
            className="product-value val"
          />
        </li>
        <li>
          <button onClick={()=>handleIncrease()} className="value-increase">+ </button>
        </li>
      </ul>
    </div>
  );
};

export default Quantity;
