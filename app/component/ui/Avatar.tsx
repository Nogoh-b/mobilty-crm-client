'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import { Colors, IconSize, InputSize, InputStyle, InputType } from '@/app/constants/AppConstants';

interface AvatarProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	size?: 35 | 40 | 45 | 50 | 55;
	src?: string;
	statusColor?: Colors;
	hasStatus?: boolean;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function Avatar({src = '/assets/images/avatar/pic1.jpg',hasStatus= false,  size = 35 ,  statusColor = 'secondary' , onClick}:AvatarProps) {


	return (
		<>
            <div className="d-flex dz-avatar list-status">
                <div  className="avatar-list">
                    <div className={`media media-${size}`}>
                        <img src={src} />	
                        {
                            hasStatus && 
                            <span className={`list-status bg-${statusColor}`}></span>
                        }
                    </div>
                </div>
            </div>
        </>
	);
}

export default Avatar;
