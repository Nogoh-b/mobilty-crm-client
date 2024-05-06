"use client"
import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
interface ButtonForSideBarProps {
	component: React.ReactNode;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
  function ButtonForSideBar({ component, onClick }: ButtonForSideBarProps) {
	useEffect(() => {
	  const menuToggler = document.querySelector('.menu-toggler') as HTMLElement;
	  const sidebar = document.querySelector('.sidebar') as HTMLElement;
	  const darkOverlay = document.querySelector('.dark-overlay') as HTMLElement;
	  const navColor = document.querySelector('.nav-color') as HTMLElement;
  
	  const handleMenuToggle = () => {
		console.log('menuToggler');
		sidebar.classList.toggle('show');
		menuToggler.classList.toggle('show');
		darkOverlay.classList.toggle('active');
	  };
  
	  const handleDarkOverlayClick = () => {
		console.log('darkOverlay');
		menuToggler.classList.remove('show');
		sidebar.classList.remove('show');
		darkOverlay.classList.remove('active');
	  };
  
	  menuToggler.addEventListener('click', handleMenuToggle);
	  darkOverlay.addEventListener('click', handleDarkOverlayClick);
  
	  return () => {
		menuToggler.removeEventListener('click', handleMenuToggle);
		darkOverlay.removeEventListener('click', handleDarkOverlayClick);
	  };
	}, []); // Le tableau vide [] signifie que cet effet ne doit s'exécuter qu'une seule fois après le rendu initial
  
	const handleClick = () => {
	  if (onClick) {
		onClick(); // Appeler la fonction de rappel si elle est fournie
	  }
	};
  
	return (
	  <>
		<div className='menu-toggler' onClick={handleClick}>{component}</div>
		<SideBar />
	  </>
	);
  }

export default ButtonForSideBar;
