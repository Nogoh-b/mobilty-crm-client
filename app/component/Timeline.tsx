"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './ui/IconButton';
import { footerMenuDatas } from '../constants/FooterConstants';
import NabButton from './ui/NabButton';
interface NabButtonProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isActive?: boolean;
	iconName?: FontAwesomeIcon;
	notificationNumber?: number;
	label?: string;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	datas?: {date: string, title: string, description: string}[];

  }
function Timeline({datas = [
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.'},
	{date: '11 March 2020', description: 'Some text goes here', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.'},
],iconType = 'fa', iconSize =20 , label ='' ,  notificationNumber = 0 ,  order = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick}:NabButtonProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

		<ul className="dz-timeline">
			{
				datas.map((item,index)=>(
					<li key={index} className="timeline-item ">
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
