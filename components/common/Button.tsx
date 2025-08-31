import React from "react";

type buttonProps= {
	children: React.ReactNode;
};

const Button: React.FC<buttonProps> = ({children}) => {
	const baseStyle = "p-4";
	const variants= {
		primary: "";
		secondary: "";
	};

	return (
		<button className= {`{baseStyle} ${variants[variant]}`}
	)
}
export default Button;
