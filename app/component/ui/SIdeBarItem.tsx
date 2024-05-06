"use client"

import CustomInput from "./CostumInput";

interface SIdeBarItemProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	iconSize?: number;
	hasRadio?: boolean;
	iconName?: FontAwesomeIcon;
    notificationNumber: number, 
	label: string;
	onClick?: () => void; // Ajoutez cette prop pour gérer le clic sur le composant
  }
  function SIdeBarItem({ label='Item',iconType = 'far', iconName = 'search',  notificationNumber = 1,iconSize = 20, hasRadio = false, onClick }: SIdeBarItemProps) {
	const handleClick = () =>{
		if(onClick)
			onClick()
	}
	return (
		<li className="pointer">
			<a className="nav-link" onClick={handleClick}>
				<i className={`${iconType} fa-${iconName} pe-3 ps-1`} style={{ fontSize: iconSize + 'px', color : 'gray' }}></i>
				<span>{label}</span>
				{
					notificationNumber && notificationNumber > -1 &&
					<span className="badge badge-circle badge-danger">{notificationNumber}</span>
				}
							{
					hasRadio &&
					<CustomInput />
				}
			</a>
		</li>
	);
  }

export default SIdeBarItem;
