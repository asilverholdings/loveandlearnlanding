
'use client'

import React from "react";
import Link from "next/link";
import Colors from "./Colors";
import Quantity from "./Quantity";
import Size from "./Size";
import { useContextElement } from "@/context/Context";
const ProductGalleryContent = ({data}) => {
  const {addProductToCart,
    isAddedToCartProducts,} = useContextElement()
  return (
    <div className="product-info ps-xl-5 md-mt-50">
      <div className="stock-tag">In Stock</div>
      <h3 className="product-name">{data.title}</h3>
      <ul className="style-none d-flex align-items-center rating">
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </li>
        <li>
          <a href="#">(2 Customer Reviews)</a>
        </li>
      </ul>
      <div className="price">${Math.round(data.price - 3).toFixed(2)} - ${Math.round(data.price + 3).toFixed(2)}</div>
      <p className="availability">38 Piece Available </p>
      <p className="description-text">
        Tote bag gochujang dreamcatcher fanny pack ban cold-pressed. Vape mlkshk
        sriracha marfa.{" "}
      </p>
      <ul className="product-feature style-none">
        <li>Free delivery available</li>
        <li>Use promo-code and save up to 25%</li>
      </ul>

      <div className="customize-order">
        <div className="row">
          <div className="col-xl-11">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="quantity mt-25">
                  <h6>Quantity</h6>
                  <Quantity data={data} />
                </div>
              </div>
              {/* End Quantity */}

              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="color-selection mt-25">
                  <h6>Colors</h6>
                  <Colors />
                </div>
              </div>
              {/* End colors  */}

              <div className="col-xl-5 col-md-6 col-sm-4">
                <div className="size-selection mt-25">
                  <h6>Size</h6>
                  <Size />
                </div>
              </div>
              {/* End Size */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.customize-order --> */}

      <div className="button-group mt-30 d-sm-flex align-items-center">
        <span  style={{cursor:'pointer'}} onClick={()=>addProductToCart(data.id)}  className="cart-btn mt-15 me-sm-4 d-block">
          {isAddedToCartProducts(data.id) ? <Link style={{color:'inherit',padding:'0px',margin:'0px'}} href={'/cart'}>View Cart</Link>:'Add to Cart'}
        </span>
        <a href="#" className="wishlist-btn mt-15 d-block">
          Add To wishlist
        </a>
      </div>
    </div>
  );
};

export default ProductGalleryContent;
