import React, { Component } from 'react';
import './Header.css';
import banner from '../Home/header.nosync.jpg';

class Header extends Component {
	render() {
		return (
			<div>
				<img className="header-image" src={banner} alt="" />
			</div>
		);
	}
}

export default Header;
