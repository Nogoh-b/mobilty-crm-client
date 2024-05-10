'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import {AlertType, Colors, IconSize, InputSize, InputStyle, InputType } from '@/app/constants/AppConstants';

interface AlertProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	alertType?: Colors;
	alertStyle?: AlertType;
	hasCloseButton?: boolean;
	isRadius?: boolean;
	iconName?: FontAwesomeIcon;
	message?: string;
	type?: InputType;
	link?: string;
	inputSize?: InputSize;
	iconSize?: IconSize;
	order?: number;
	onClick?: (i: number) => void; 
  }
function Alert({hasCloseButton = false, iconType = 'fa', inputSize ='lg' , type ='text' ,  message = '' , iconSize = 'lg' ,  isRadius = true ,  iconName = 'search', alertType ="primary" ,alertStyle ="solid" , link ="Style1" , onClick}:AlertProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleCloseBtnClicjked = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

	
    useEffect(() => {
    }, []);
	

	return (
		<>
            <div className={`alert alert-${alertType} ${ alertStyle} ${hasCloseButton ? 'alert-dismissible' : ''}  ${isRadius ? 'alert-square' : ''} fade ${isOpen ? 'show' : 'd-none'}`}>
                <FontAwesome className='me-2 pt-1 text-primary' iconColor={alertStyle == 'light' ? alertType : 'white'} iconName={iconName} /> 
                <span dangerouslySetInnerHTML={{__html :message}}></span>
                {
                    hasCloseButton &&
                    <button onClick={handleCloseBtnClicjked} className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                }
            </div>
            
        </>
	);
}

export default Alert;
