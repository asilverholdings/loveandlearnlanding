import React from "react";

const Size = () => {
  return (
    <ul className="style-none d-flex align-items-center size-custome-input">
      <li>
        <input
          type="radio"
          name="size"
          defaultValue="small"
          className="size-check-btn"
        />
        <label>S</label>
      </li>
      <li>
        <input
          type="radio"
          name="size"
          defaultValue="medium"
          className="size-check-btn"
        />
        <label>M</label>
      </li>
      <li>
        <input
          type="radio"
          name="size"
          defaultValue="large"
          className="size-check-btn"
        />
        <label>L</label>
      </li>
      <li>
        <input
          type="radio"
          name="size"
          defaultValue="extra large"
          className="size-check-btn"
        />
        <label>XL</label>
      </li>
    </ul>
  );
};

export default Size;
