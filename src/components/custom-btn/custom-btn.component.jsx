import React from "react";

import "./custom-btn.styles.scss";

const CustomButton = ({ children, onClick, deleteBtn, ...otherProps }) => (
  <button className={`custom-btn ${deleteBtn ? "delete-btn" : ""}`} onClick={onClick} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
