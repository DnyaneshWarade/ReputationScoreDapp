import React from "react";
import "./Button.css";

const Button = ({ className='', width='170px', children, ...rest }) => {
	return (
		<button className={`${className} gradient-button`} {...rest} style={{width:width}} >
			{children}
		</button>
	);
};

export default Button;
