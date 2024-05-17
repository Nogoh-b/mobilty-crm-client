"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../../constants/FooterConstants';
import NabButton from './NabButton';
import { Colors, Size } from '@/app/constants/AppConstants';


interface SpinnerProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isGrow?: boolean;
	color?: Colors;
	iconPosition? : 'left' | 'right' | ''
	iconName?: FontAwesomeIcon;
	text?: string;
	iconStyle?: 'Style1' | 'Style2';
	size?: 'lg' | 'sm' | 'md' | '';
	type?: 'solid' | 'dashed' | 'dotted' | '';
	onClick?: (i: number) => void; 
  }
function Spinner({isGrow = false, iconType = 'fa', size ='' , type = '' ,  color = 'primary' ,  iconName = 'search', iconPosition ="" , text ="" , onClick }:SpinnerProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>
		<div className={`${isGrow ? 'spinner-grow' : ''} spinner-border ${!isGrow ? 'spinner-border-' + size : 'spinner-grow-'+size}  me-2 mb-2 text-${color}`} role="status">
			<span className="sr-only">Loading...</span>
		</div>
    </>
  );
}

export default Spinner;
