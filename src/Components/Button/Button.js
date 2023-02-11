import React from "react";
import "./Button.css";

const Button = ({ className='', children, ...rest }) => {
	return (
		<button className={`${className} gradient-button`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
