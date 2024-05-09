'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
interface UploadInputProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	hasRightIcon?: boolean;
	iconName?: FontAwesomeIcon;
	placeHolder?: string;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function UploadInput({hasRightIcon = false,iconType = 'fa', iconSize =20  ,  placeHolder = '' ,  order = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick}:UploadInputProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPass = () => {
        setShowPassword(!showPassword);
    };

	return (
		<>
			<div className="input-group mb-3">
				<input type="file" className="imageuplodify" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple />
			</div>
			
		</>
	);
}

export default UploadInput;
