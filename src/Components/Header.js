import React, { Component } from 'react';
import './Header.css';
import stock from '../stock.nosync.jpg';

class Header extends Component {
	render() {
		return (
			<div>
				<img className="header-image" src={stock} alt="" />
			</div>
		);
	}
}

export default Header;
