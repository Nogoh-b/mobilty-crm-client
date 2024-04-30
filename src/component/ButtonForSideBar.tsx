import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
interface ButtonForSideBarProps {
	component: React.ReactNode;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
function ButtonForSideBar({component, onClick }:ButtonForSideBarProps) {
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
		<div onClick={handleClick}>{component}</div> 
			<SideBar />
		</>
	);
}

export default ButtonForSideBar;
