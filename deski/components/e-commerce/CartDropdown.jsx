import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
const CartDropdown = () => {
  const {cartProducts,totalPrice} = useContextElement()
  return (
    <>
    {cartProducts.length ? 
      <ul className="style-none cart-product-list" style={{maxHeight:'400px',overflow:'scroll'}}>
        
        {cartProducts.map((item,i)=>
        <li className="d-flex align-items-center selected-item">
          <Link
                 href={`/products/${item.id}`}
            className="item-img d-flex align-items-center justify-content-center"
          >
            <Image width={465} height={609} style={{height:'fit-content'}}     src={`/images/shop/${item.img}.png`} alt="cart" />
          </Link>
          <div className="item-info">
            <Link     href={`/products/${item.id}`} className="name">
              {item.name}
            </Link>
            <div className="price">
              ${item.price.toFixed(2)} <span className="quantity">x {item.quantity}</span>
            </div>
          </div>
          {/* <!-- /.item-info --> */}
        </li>)}
        {/* <!-- /.selected-item --> */}

      
        {/* <!-- /.selected-item --> */}
      </ul> : <div style={{fontSize:'18px',margin:'15px auto'}} >Cart is empty</div>}
      {/* <!-- /.cart-product-list --> */}

      <div className="subtotal d-flex justify-content-between align-items-center">
        <div className="title">Subtotal</div>
        <div className="total-price">${totalPrice.toFixed(2)}</div>
      </div>
      <ul className="style-none button-group">
      {cartProducts.length ? <>
        <li>
          <Link     href="/cart" className="view-cart">
            View Cart
          </Link>
        </li>
        <li>
          <Link     href="/checkout" className="checkout">
            Checkout
          </Link>
        </li></> :  <li>
          <Link     href="/e-commerce" className="view-cart">
           Continue Shoping
          </Link>
        </li>  }
      </ul>
    </>
  );
};

export default CartDropdown;
