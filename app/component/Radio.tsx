"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../constants/FooterConstants';
import NabButton from './NabButton';

function Radio() {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

	<div className="menubar-area">
		<div className="toolbar-inner menubar-nav">
		{
		footerMenuDatas.map((item, index) => (
			<NabButton onClick={handleClick} notificationNumber = {item.notificationNumber} label = {item.title} iconName={item.icon} link={item.link} isActive = {index === activeIndex} order={index}  />
			))
		}
		</div>
	</div>

    </>
  );
}

export default Radio;