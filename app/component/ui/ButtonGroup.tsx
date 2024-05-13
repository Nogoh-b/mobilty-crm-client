"use client"
import { Colors, DataButtonGroup, Size } from '@/app/constants/AppConstants';
import React, { useState, useEffect } from 'react';
interface ButtonGroupProps {
	datas: DataButtonGroup[];
	type?: Colors;
	isVertical?: boolean;
	size?: Size;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
  function ButtonGroup({ datas, type = 'primary', onClick, size = 'sm', isVertical= false }: ButtonGroupProps) {
	useEffect(() => {

	}, []); // Le tableau vide [] signifie que cet effet ne doit s'exécuter qu'une seule fois après le rendu initial
  
	const handleClick = () => {
	  if (onClick) {
		onClick(); // Appeler la fonction de rappel si elle est fournie
	  }
	};
  
	return (
	  <>
		<div className={`mb-2 me-2 ${ size.length > 0 ? 'btn-group-'+size : ''} ${isVertical ? 'btn-group-vertical ' : 'btn-group '}`}>
			{
				datas.map((data, index) => (
					<button key={index} className={`btn btn-${type}`} type="button">{data.text}</button>
				))
			}

			{
				<div className="btn-group">
					<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
					<div className="dropdown-menu"><a className="dropdown-item" href="javascript:void()">Dropdown link</a>
						<a className="dropdown-item" href="javascript:void()">Dropdown link</a>
					</div>
				</div>
			}

		</div>
		
	  </>
	);
  }

export default ButtonGroup;
