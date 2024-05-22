"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../../constants/FooterConstants';
import NabButton from './NabButton';
import { Colors } from '@/app/constants/AppConstants';

interface CardProps {
	isContentCenter?: boolean;
	isFull?: boolean;
	hasNavTab?: boolean;
	title?: string;
	color?: Colors;
	btnColor?: Colors;
	content?: string;
	footerText?: string;
	onClick?: (i: number) => void; 
	cardLinkText? : string;
	cardLink? : string;
	btnLinkText? : string;
	btnLink? : string;


  }
function Card({color,btnColor = 'primary',content = '', isContentCenter,onClick,title, footerText,cardLink,cardLinkText, isFull, btnLink,btnLinkText = '', hasNavTab}:CardProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

		<div className={`card ${isContentCenter ? '  text-center' : ''} ${color != '' ?' text-white bg-'+color : ''} ${isFull ? ' card-full' : ''}`}>
			<div className="card-header border-0 pb-0">
				<h5 className={`card-title ${color != '' ? ' text-white' : ''}`}>{title}</h5>
			</div>
			<div className="card-body">
				{
					hasNavTab &&
					<ul className="nav nav-tabs card-body-tabs mb-3">
						<li className="nav-item"><a className="nav-link active" href="javascript:void(0);">Active</a>
						</li>
						<li className="nav-item"><a className="nav-link" href="javascript:void(0);">Link</a>
						</li>
						<li className="nav-item"><a className="nav-link disabled" href="javascript:void(0);">Disabled</a>
						</li>
					</ul>
				}
				<p dangerouslySetInnerHTML={{__html:content}} className="card-text">
				</p>
				{
					btnLinkText?.length > 0 &&
					<a href={btnLink} className={`btn  ${color != '' ?' bg-white   light btn-card text-'+color + ' btn-'+color  : 'btn-'+btnColor }  `}>{btnLinkText}</a>
				}
			</div>
			<div className="card-footer border-0 pt-0">
				<p className="card-text d-inline">{footerText}</p>
				<a href={cardLink} className="card-link float-end">{cardLinkText}</a>
			</div>
		</div>

    </>
  );
}

export default Card;
