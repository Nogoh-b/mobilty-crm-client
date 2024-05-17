"use client"
import React, {CSSProperties } from 'react';
import {useRouter} from 'next/navigation';
import { Colors } from '../../constants/AppConstants';

interface DividerProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	hasLabel?: boolean;
	color?: Colors;
	iconPosition? : 'left' | 'right' | ''
	iconName?: FontAwesomeIcon;
	text?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	type?: 'solid' | 'dashed' | 'dotted' | '';
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function Divider({hasLabel = true, iconType = 'fa', iconSize =15 , type = '' ,  color = 'primary' ,  iconName = 'search', iconPosition ="" , text ="" , onClick }:DividerProps) {
	const router = useRouter()


	return (
		<>
			<div className={`divider border-${color} divider-${type} inner-divider ${iconPosition} mt-3`}>
				{
					text.length === 0 && hasLabel ?
					<i className={`${iconType} fa-${iconName} ${'text-white'}`} style={{fontSize: iconSize + 'px'}}></i>
					 : text.length != 0 && hasLabel ?
					<span>{text}</span> : <></>
				}
			</div>
		</>
	);
}

export default Divider;
