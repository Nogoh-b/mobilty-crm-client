"use client"
import { Colors, Size } from '@/app/constants/AppConstants';
import React, { useState, useEffect } from 'react';
interface ButtonProps {
	color: Colors;
	type?: '' | 'square' | 'light' | 'outline';
	text?: string;
	className?: string;
	isOutline?: boolean;isLoading?: boolean;
	isLight?: boolean;
	size?: Size;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
  function Button({ color = 'primary', className , type = '', onClick, size = 'sm', isOutline= false,  isLoading= false, isLight= false, text = '' }: ButtonProps) {
	useEffect(() => {

	}, []); // Le tableau vide [] signifie que cet effet ne doit s'exécuter qu'une seule fois après le rendu initial
  
	const handleClick = () => {
	  if (onClick) {
		onClick(); // Appeler la fonction de rappel si elle est fournie
	  }
	};
  
	return (
	  <>

			<button disabled = {isLoading} type="button" className={`btn btn-${color} btn-${size} ${isOutline ? ' btn-outline-'+type  :  ''} ${isLight ? 'light' : ''} ${className} `}>
				{
					isLoading &&
					<span className="spinner-border me-3 spinner-border-sm" role="status" aria-hidden="true"></span>

				}
			{text}</button>
	  </>
	);
  }

export default Button;
