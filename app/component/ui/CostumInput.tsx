import React, { useState, useEffect, CSSProperties } from 'react';
interface CustomInputProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isActive?: boolean;
	iconName?: FontAwesomeIcon;
	notificationNumber?: number;
	label?: string;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function CustomInput({isActive = false,iconType = 'fa', iconSize =20 , label ='' ,  notificationNumber = 0 ,  order = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick}:CustomInputProps) {
	const handleClick = () => {
		if (onClick) {
		  onClick(order); // Appeler la fonction de rappel si elle est fournie
		}
	};

	return (
		<>
			<div className="custom-switch">
				<input type="checkbox" className="switch-input theme-btn" id="toggle-dark-menu"/>
				<label className="custom-switch-label" htmlFor="toggle-dark-menu"></label>
			</div>
		</>
	);
}

export default CustomInput;
