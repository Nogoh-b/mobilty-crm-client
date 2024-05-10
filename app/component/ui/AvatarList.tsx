'use client'
import React, { useState, useEffect, CSSProperties } from 'react';
import FontAwesome from './FontAwesome';
import { IconSize, InputSize, InputStyle, InputType } from '@/app/constants/AppConstants';

interface AvatarListProps {
	datas?: string[];
	size?: 35 | 40 | 45 | 50 | 55;
	onClick?: (i: number) => void; 
  }
function AvatarList({datas = ['/assets/images/avatar/pic1.jpg'], size = 35 , onClick}:AvatarListProps) {


	return (
		<>
			<ul className="dz-avatar list-stacked">
				{
					datas.map((src, index) => (
						<li className="avatar-list">
							<div className={`media media-${size}`}>
								<img src={src} />	
							</div>
						</li>
						))
				}

			</ul>
        </>
	);
}

export default AvatarList;