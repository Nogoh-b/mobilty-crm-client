"use client"
import { Colors, Size } from '@/app/constants/AppConstants';
import React, { useState, useEffect } from 'react';
interface DropdownProps {
	color: Colors;
	type?: '' | 'square' | 'light' | 'outline';
	text?: string;
	className?: string;
	isOutline?: boolean;isLoading?: boolean;
	isLight?: boolean;
	size?: Size;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
  function Dropdown({ color = 'primary', className , type = '', onClick, size = 'sm', isOutline= false,  isLoading= false, isLight= false, text = '' }: DropdownProps) {
	useEffect(() => {

	}, []); // Le tableau vide [] signifie que cet effet ne doit s'exécuter qu'une seule fois après le rendu initial
  
	const handleClick = () => {
	  if (onClick) {
		onClick(); // Appeler la fonction de rappel si elle est fournie
	  }
	};
  
	return (
	  <>
		<div className="btn-group">
			<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
			<div className="dropdown-menu"><a className="dropdown-item" href="javascript:void()">Dropdown link</a>
				<a className="dropdown-item" href="javascript:void()">Dropdown link</a>
			</div>
		</div>
	  </>
	);
  }

export default Dropdown;
