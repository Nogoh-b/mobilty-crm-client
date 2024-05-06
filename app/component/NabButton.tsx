import React, { useState, useEffect, CSSProperties } from 'react';
import SideBar from './SideBar';
import IconButton from './IconButton';
interface NabButtonProps {
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
function NabButton({isActive = false,iconType = 'fa', iconSize =20 , label ='' ,  notificationNumber = 0 ,  order = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick}:NabButtonProps) {
	const handleClick = () => {
		if (onClick) {
		  onClick(order); // Appeler la fonction de rappel si elle est fournie
		}
	};

	return (
		<>
			<div  onClick={handleClick} className="nav-link pointer">
				<div className='d-flex1'>

					<IconButton  notificationNumber = {notificationNumber}  iconName={iconName} link={link} isActive = {isActive} order={order} />
					<div className={`${isActive ? 'text-primary1' :  'text-black-50'}`}style ={{fontSize : '12px'}}>{label}</div>
				</div>
			</div>
		</>
	);
}

export default NabButton;
