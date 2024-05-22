import React, { useState, useEffect, CSSProperties } from 'react';
import SideBar from '../SideBar';
import IconButton from './IconButton';
import { text } from 'stream/consumers';
import { Size } from '@/app/constants/AppConstants';
interface SocialProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid' | 'fab';
	isButtonIcon?: boolean;
	isRounded?: boolean;
	iconName?: FontAwesomeIcon;
	buttonType?: 'facebook' | 'linkedin' | 'twitter' | 'whatsapp' | 'google' | 'phone' | 'pinterest' | 'email'  ;
	label?: string;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	size?: Size;
	text?: string;
	onClick?: (i: number) => void; 
	className?: string;
  }
function Social({isButtonIcon = false,iconType = 'fab', isRounded = false, size ='' , label ='' ,  buttonType = 'facebook' ,  text = 'Facebook' ,  iconName = 'facebook', iconStyle ="Style1" , className ="Style1" , onClick}:SocialProps) {
	const handleClick = () => {

	};

	return (
		<>
			<a href="javascript:void(0);" className={`btn ${size != '' ? 'btn-'+size : ''} btn-${buttonType} ${isRounded ? "btn-rounded" :  ''} btn-icon${!isButtonIcon ? '-text' : ''} ${className}`}><i className={`${iconType} fa-${iconName} `}></i> {text}</a>

		</>
	);
}

export default Social;
