import { Colors, colorsVariants } from '@/app/constants/AppConstants';
import React, { useState, useEffect, CSSProperties } from 'react';
interface FontAwesomeProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isActive?: boolean;
	iconName?: FontAwesomeIcon;
	notificationNumber?: number;
	label?: string;
	iconColor?: Colors;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	className?: string;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function FontAwesome({isActive = false,iconType = 'fa', iconSize =20 , className = '',  order = 0 ,  iconName = 'search', iconStyle ="Style1" , iconColor ="" , onClick}:FontAwesomeProps) {
	const handleClick = () => {
		if (onClick) {
		  onClick(order); // Appeler la fonction de rappel si elle est fournie
		}
	};

	return (
		<>
				<i className={`${iconType} fa-${iconName} ${isActive ? 'text-primary1' :  iconColor} ${className}`} style={{ color: colorsVariants[iconColor] +'!important' , fontSize: iconSize + 'px'}}>
				</i>  
		</>
	);
}

export default FontAwesome;
