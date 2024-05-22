"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../../constants/FooterConstants';
import NabButton from './NabButton';

function Chart() {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

		<div className="col-12">
			<div className="card">
				<div className="card-header">
					<h5 className="card-title">Pie Chart</h5>
				</div>
				<div className="card-body">
					<canvas id="dzPieChart" width="400" height="300"></canvas>
				</div>
			</div>
		</div>

    </>
  );
}

export default Chart;
