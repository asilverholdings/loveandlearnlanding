import React from "react";

const Colors = () => {
  return (
    <ul className="style-none d-flex align-items-center color-custome-input">
      <li>
        <input
          type="radio"
          name="color"
          defaultValue="color01"
          className="color-check-btn"
          defaultChecked="checked"
        />
        <label style={{ background: "#9CD2FF" }}></label>
      </li>
      <li>
        <input
          type="radio"
          name="color"
          defaultValue="color02"
          className="color-check-btn"
        />
        <label style={{ background: "#FF9153" }}></label>
      </li>
      <li>
        <input
          type="radio"
          name="color"
          defaultValue="color03"
          className="color-check-btn"
        />
        <label style={{ background: "#5FF2BE" }}></label>
      </li>
      <li>
        <input
          type="radio"
          name="color"
          defaultValue="color04"
          className="color-check-btn"
        />
        <label style={{ background: "#9A82FF" }}></label>
      </li>
    </ul>
  );
};

export default Colors;
