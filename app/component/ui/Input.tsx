'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import { Colors, IconSize, InputSize, InputStyle, InputType } from '@/app/constants/AppConstants';

interface InputProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	hasRightIcon?: boolean;
	iconName?: FontAwesomeIcon;
	placeHolder?: string;
	type?: InputType;
	link?: string;
	inputStyle?: InputStyle;
	inputSize?: InputSize;
	iconSize?: number;
	iconColor?: Colors;
	order?: number;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function Input({hasRightIcon = false,iconType = 'fa', inputSize ='lg' , type ='text' ,  placeHolder = '' ,  order = 0 ,  iconName = 'search', inputStyle ="GroupIcon" , iconSize ="15", iconColor='white' , onClick}:InputProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [classInput, setClassInput] = useState<string>('input-group-icon');
    const [inputSizeState, setInputSizeState] = useState<string>('input-group-icon');
    const [iconSizeState, setIconSizeState] = useState<number>(15);

    const handleShowPass = () => {
        setShowPassword(!showPassword);
    };
	
    useEffect(() => {
        switch (inputStyle) {
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
    }, [inputStyle]);
	
    useEffect(() => {
        switch (inputSize) {
            case 'lg':
                setIconSizeState(24)
                break;
            case 'sm':
                setIconSizeState(16)
                break;

            default:
                setIconSizeState(14)
                break;
        }
    }, [inputSize]);

	return (
		<>
			<div className={`mb-3 input-group ${classInput} ${inputSize.length > 0 ? 'input-'+inputSize : ''}`}>
				<span className="input-group-text">
					<div className="input-icon">
						<FontAwesome iconColor={iconColor} iconSize={iconSize} iconName={iconName} iconType={iconType}  />
					</div>
				</span>
				<input type={!hasRightIcon ? type : showPassword ? 'text' : 'password' } className="form-control" placeholder={placeHolder}/>
				{
					hasRightIcon &&					
					<span className="input-group-text show-pass" onClick={handleShowPass}>
						<FontAwesome className={`text-primary`} iconSize={iconSize} iconName={`${showPassword ? 'eye' : 'eye-slash'}`} iconType={'fa'}  />
					{/* <i  className={`fa    ${'fa-'+iconSize}`}></i> */}
				</span>
				}
			</div>
			
</>
	);
}

export default Input;
