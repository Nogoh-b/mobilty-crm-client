"use client"
import React, {CSSProperties } from 'react';
import {useRouter} from 'next/navigation';

interface IconButtonProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid';
	isActive?: boolean;
	notificationNumber?: number;
	iconName?: FontAwesomeIcon;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	iconSize?: number;
	order?: number;
	onClick?: (i: number) => void; 
	style?: CSSProperties | undefined;
  }
function IconButton({isActive = false,iconType = 'fa', iconSize =20 , order = 0 ,  notificationNumber = 0 ,  iconName = 'search', iconStyle ="Style1" , link ="Style1" , onClick }:IconButtonProps) {
	const router = useRouter()
	const handleClick = (e: any) => {
		e.preventDefault()
		if(link && link.length > 0)
			router.push(link)
		if (onClick) {
		  onClick(order); 
		}
	};
	const size_notifs = 14

	return (
		<>
			<a onClick={handleClick}  className={`nav-link1 add-post1 pointer `}>
				<i className={`${iconType} fa-${iconName} ${isActive ? 'text-primary1' :  'text-black-50'}`} style={{fontSize: iconSize + 'px'}}>
				</i>  
				<div className='w-100 d-flex align-content-center align-items-center justify-content-center'>
					<div style ={{width :  size_notifs + 'px', height : size_notifs + 'px', fontSize: '9px', color:'white', padding : '0px' , marginLeft:iconSize + 'px', marginTop:  '-'+(iconSize *2 + 4)+'px'}} className={`bg-secondary badge_notif ${notificationNumber && notificationNumber > -1 ? '' : 'd-none'}`}>{notificationNumber}</div>
				</div>
			</a>
			{/* <div className="nav-link">
				<a  className="align-items-center bell-icon d-flex justify-content-center me-2"> <i className={`fa-${iconSize} fa-${iconName} ${iconType}`} style={{fontSize: iconSize + 'px'}}><div className={`bg-secondary top-right ${notificationNumber && notificationNumber > -1  ? '' : 'd-none'}`}></div></i> </a>
			</div> */}
		</>
	);
}

export default IconButton;
