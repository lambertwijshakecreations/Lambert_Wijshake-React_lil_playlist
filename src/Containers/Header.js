import React from "react";
import Logo from "../Images/logo.png";

const Header = () => {
	return (
		<span className="musiclist-header">
			<img src={Logo} alt="logo" />
			<h1>Lambert Wijshake Creations Lil Music List.</h1>
		</span>
	);
};

export default Header;
