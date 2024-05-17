"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../../constants/FooterConstants';
import NabButton from './NabButton';
import { Colors, Size } from '@/app/constants/AppConstants';


interface StepperProps {
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
function Stepper({isGrow = false, iconType = 'fa', size ='' , type = '' ,  color = 'primary' ,  iconName = 'search', iconPosition ="" , text ="" , onClick }:StepperProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>
		{/* <div className={`${isGrow ? 'spinner-grow' : ''} spinner-border ${!isGrow ? 'spinner-border-' + size : 'spinner-grow-'+size}  me-2 mb-2 text-${color}`} role="status">
			<span className="sr-only">Loading...</span>
		</div> */}
            <div className="card">
                <div className="card-header">
                    <h5 className="title">Different Size Steppers</h5>    
                </div>
                <div className="card-body row g-3">
					<div className="col-6">
						<div className="dz-stepper border-2">
							<small>Default Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
					</div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper border-2">
							<small>Default Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper stepper-fill border-2">
							<small>Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper stepper-fill border-2">
							<small>Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper small-stepper border-2">
							<small>Small Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper small-stepper border-2">
							<small>Small Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper stepper-fill small-stepper border-2">
							<small>Small Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper stepper-fill small-stepper border-2">
							<small>Small Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper large border-2">
							<small>large Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper large border-2">
							<small>large Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper large stepper-fill large border-2">
							<small>Large Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
					<div className="col-6">
						<div className="dz-stepper rounded-stepper large stepper-fill large border-2">
							<small>Large Fill Stepper</small>
							<input className="stepper" type="text" value="0" name="demo3" />
						</div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Stepper;
