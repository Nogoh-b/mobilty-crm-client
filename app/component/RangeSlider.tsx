"use client"
import React, {CSSProperties } from 'react';
import {useRouter} from 'next/navigation';
import { Colors } from '../constants/AppConstants';

interface RangeSliderProps {
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
function RangeSlider({hasLabel = true, iconType = 'fa', iconSize =15 , type = '' ,  color = 'primary' ,  iconName = 'search', iconPosition ="" , text ="" , onClick }:RangeSliderProps) {
	const router = useRouter()


	return (
		<>
				<div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Slider tooltip</h5>
                        </div>
                        <div className="card-body">
                            <div className="slider-tooltip ">
                                <div id="slider-tooltips"></div>
                            </div>
                        </div>
                    </div>
                </div>
		</>
	);
}

export default RangeSlider;
