"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './ui/IconButton';
import { footerMenuDatas } from '../constants/FooterConstants';
import NabButton from './ui/NabButton';
import { Colors } from '../constants/AppConstants';
interface NabButtonProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isPanel?: boolean;
	iconName?: FontAwesomeIcon;
	notificationNumber?: number;
	color?: Colors;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	datas?: {date: string, title: string, description: string, color?: Colors}[];

  }
function Timeline({datas = [
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.', color: 'danger'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.', color: 'primary'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.', color: 'success'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.', color: 'info'},
],iconType = 'fa', iconSize =20 , color ='light' ,  isPanel = false ,  order = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick}:NabButtonProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>
		<ul className={`dz-timeline  ${isPanel ? 'timeline-panel' :  ''}`}>

			{
				datas.map((item,index)=>(
					<li key={index} className={`timeline-item  ${item.color != '' ? item.color : color}`}>
						<p className="timeline-date ">{item.date}</p>
						<h5 className="timeline-tilte">{item.title}</h5>
						<p className="timeline-content">
							{item.description}
						</p>
					</li>
				))
			}
		</ul>
    </>
  );
}

export default Timeline;
