"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../constants/FooterConstants';
import NabButton from './NabButton';

function Chart() {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

		<div className="col-12">
			<div className="card text-white bg-info">
				<div className="card-header">
					<h5 className="card-title text-white">Info card title</h5>
				</div>
				<div className="card-body mb-0">
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="javascript:void(0);" className="btn bg-white text-info btn-card">Go
						somewhere</a>
				</div>
				<div className="card-footer bg-transparent border-0 text-white">
					Last updateed 3 min ago
				</div>
			</div>
		</div>

    </>
  );
}

export default Chart;
