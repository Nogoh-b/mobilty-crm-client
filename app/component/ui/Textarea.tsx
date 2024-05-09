'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import { InputSyle } from '@/app/constants/AppConstants';
interface TextareaProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	hasRightIcon?: boolean;
	iconName?: FontAwesomeIcon;
	placeHolder?: string;
	link?: string;
	textareaStyle?: InputSyle;
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function Textarea({hasRightIcon = false,iconType = 'fa', iconSize =20  ,  placeHolder = '' ,  order = 0 ,  iconName = 'search', textareaStyle ="GroupIcon" , link ="Style1" , onClick}:TextareaProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPass = () => {
        setShowPassword(!showPassword);
    };
    const [classInput, setClassInput] = useState<string>('input-group-icon');
    useEffect(() => {
        switch (textareaStyle) {
            case 'GroupIcon':
                setClassInput('input-group-icon');
                break;
            case 'ModernFields':
                setClassInput('input-group');
                break;
            case 'ModernFielsRadius':
                setClassInput('input-radius');
                break;
            case 'Minimalist':
                setClassInput('input-mini');
                break;
            default:
                setClassInput('input-mini');
                break;
        }
    }, [textareaStyle]);
	return (
		<>
			<div className={`mb-3 input-group ${classInput}`}>
				<textarea className="form-control" placeholder={placeHolder} rows={4}></textarea>
			</div>
		</>
	);
}

export default Textarea;
