import React, { useState, useEffect, CSSProperties } from 'react';
import SideBar from './SideBar';
interface ToolButtonProps {
	iconType?: 'fa' | 'far' | 'fas';
	hasNotification?: boolean;
	iconName?: string;
	iconSize?: number //'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
	style?: CSSProperties | undefined;
  }
function ToolButton({iconType = 'fas', hasNotification, iconName = 'bell', iconSize =12 , onClick }:ToolButtonProps) {
	const handleClick = () => {
		if (onClick) {
		  onClick(); // Appeler la fonction de rappel si elle est fournie
		}
		const menuToggler = document.querySelector('.menu-toggler') as HTMLElement;
		const sidebar = document.querySelector('.sidebar') as HTMLElement;
		const darkOverlay = document.querySelector('.dark-overlay') as HTMLElement;
		const navColor = document.querySelector('.nav-color') as HTMLElement;
	
		menuToggler.addEventListener('click', () => {
			sidebar.classList.toggle('show');
			menuToggler.classList.toggle('show');
			darkOverlay.classList.toggle('active');
		});
	
		darkOverlay.addEventListener('click', () => {
			menuToggler.classList.remove('show');
			sidebar.classList.remove('show');
			darkOverlay.classList.remove('active');
		});
	
		navColor.addEventListener('click', () => {
			darkOverlay.classList.remove('active');
		});
	};

	return (
		<>
			<div className="icon pointer">
				<a  className="align-items-center bell-icon d-flex justify-content-center me-2"> <i className={`fa-${iconSize} fa-${iconName} ${iconType}`} style={{fontSize: iconSize + 'px'}}><div className={`bg-secondary top-right ${hasNotification ? '' : 'd-none'}`}></div></i> </a>
			</div>
		</>
	);
}

export default ToolButton;
