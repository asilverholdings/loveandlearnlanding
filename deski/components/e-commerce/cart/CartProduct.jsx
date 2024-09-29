
'use client'


import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
const CartProduct = () => {

  const {cartProducts,
    setCartProducts} = useContextElement() 
  const handleIncrease = (index) => {
    const item = cartProducts[index];

    item.quantity += 1;
    const updated = [...cartProducts];
    updated[index] = item;

    setCartProducts(updated);
  };
  const handleDecrease = (index) => {
    const item = cartProducts[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      const updated = [...cartProducts];
      updated[index] = item;

      setCartProducts(updated);
    }
  };

  const handleRemoveCart = (index) => {
    const item = cartProducts[index];

    setCartProducts((pre) => [...pre.filter((elm) => elm !== item)]);
  };
  return (
    <>

    {cartProducts.map((elm,i)=>
      <tr  key={i} >
        <td className="product-thumbnails">
          <a href="#" className="product-img">
            <Image width={465} height={609} style={{width:'100%',height:'fit-content'}}     src={`/images/shop/${elm.img}.png`} alt="image" />
          </a>
        </td>
        <td className="product-info">
          <Link href={`/products/${elm.id}`} className="product-name">
            {elm.title}
          </Link>
          <div className="serial">#859632007881</div>
          <ul className="style-none">
            <li className="size">Size: 23”</li>
            <li className="color">Color: Red</li>
          </ul>
        </td>
        <td className="price">
          <span>${elm.price.toFixed(2)}</span>
        </td>
        <td className="quantity">
          <ul className="order-box style-none">
            <li>
              <div onClick={()=>handleDecrease(i)} className="btn value-decrease">-</div>
            </li>
            <li>
              <input
                type="number"
                min="1"
                max="22"
                
                value={elm.quantity}
                disabled
                className="product-value val"
              />
            </li>
            <li>
              <div onClick={()=>handleIncrease(i)} className="btn value-increase">+ </div>
            </li>
          </ul>
        </td>
        <td className="price total-price">
          <span>${(elm.price * elm.quantity).toFixed(2)}</span>
        </td>
        <td>
          <a href="#" onClick={()=>handleRemoveCart(i)} className="remove-product">
            x
          </a>
        </td>
      </tr>)}

      
      {cartProducts.length ? <>
       </> :   <button  className="theme-btn-seven update-cart-button hoverPurple" style={{margin:'20px auto'}} >
        <Link style={{color:'inherit',margin:'0px',padding:'0px'}} href={'/e-commerce'}>
          Continue Shoping</Link>
        </button> }
 
    

     
    </>
  );
};

export default CartProduct;
