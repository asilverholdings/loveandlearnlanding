'use client'

import React, { useState } from "react";

const SocialShare = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="share-dropdown mt-20 position-relative">
      <button
        className="btn dropdown-toggle"
        type="button"
        onClick={handleClick}
      >
        Share
      </button>

      <div className={click ? "dropdown-menu show" : "dropdown-menu"}>
        <ul className="d-flex justify-content-between social-icon style-none">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShare;
