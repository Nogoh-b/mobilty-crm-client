'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import {AlertType, Colors, IconSize, InputSize, InputStyle, InputType, Size } from '@/app/constants/AppConstants';

interface AlertProps {
	type?: Colors;
	alertStyle?: AlertType;
	hasCloseButton?: boolean;
	isRadius?: boolean;
	isLight?: boolean;
	isCircle?: boolean;
	isOutLine?: boolean;
	iconName?: FontAwesomeIcon;
	message?: string;
	text?: string;
	size?: Size;
	order?: number;
	onClick?: (i: number) => void; 
  }
function Badge({hasCloseButton = false, size ='lg' ,   message = ''  , isOutLine = false , isCircle = false , isLight = false ,  isRadius = true ,  iconName = 'search', type ="primary" ,alertStyle ="solid" , text ="Style1" , onClick}:AlertProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleCloseBtnClicjked = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

	
    useEffect(() => {
    }, []);
	

	return (
		<>
            <span className={`badge  ${isLight ? 'light' : ''}   ${isCircle ? 'badge-circle' : ''} ${size != '' && isOutLine ? ' badge-outline-'+type  : size != '' && !isOutLine ? 'badge-'+type :  ''} me-1 mb-1`}>
                {text}
                
            </span>
        </>
	);
}

export default Badge;
