import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ type, onChange, placeholder, ...otherProps }) => <input className="search" type={type} onChange={onChange} placeholder={placeholder} {...otherProps} />;

export default CustomInput;
