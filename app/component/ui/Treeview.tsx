import React, { useState, useEffect, CSSProperties } from 'react';
import SideBar from '../SideBar';
import IconButton from './IconButton';
import { text } from 'stream/consumers';
import { Size } from '@/app/constants/AppConstants';
interface TreeviewProps {
	iconType?: 'fa' | 'far' | 'fas' | 'solid' | 'fab';
	isButtonIcon?: boolean;
	isRounded?: boolean;
	iconName?: FontAwesomeIcon;
	buttonType?: 'facebook' | 'linkedin' | 'twitter' | 'whatsapp' | 'google' | 'phone' | 'pinterest' | 'email'  ;
	label?: string;
	link?: string;
	iconStyle?: 'Style1' | 'Style2';
	size?: Size;
	text?: string;
	onClick?: (i: number) => void; 
	className?: string;
  }
function Treeview({isButtonIcon = false,iconType = 'fab', isRounded = false, size ='' , label ='' ,  buttonType = 'facebook' ,  text = 'Facebook' ,  iconName = 'facebook', iconStyle ="Style1" , className ="Style1" , onClick}:TreeviewProps) {
	const handleClick = () => {

	};

	return (
		<>
            <div className="card">
                <div className="card-header">
                    <h5 className="title">Basic Tree view</h5>    
                </div>
                <div className="card-body">
                    <div id="treeDemo1" className="dz-tree">
                        <ul>
                            <li data-jstree='{ "opened" : true }'>Root node
                                <ul>
                                    <li data-jstree='{ "selected" : true }'>Child node 1</li>
                                    <li>Child node 2</li>
                                    <li className="jstree-node  jstree-leaf"><i className="jstree-icon jstree-ocl" role="presentation"></i>
									<a className="jstree-anchor" href="#"  role="treeitem" aria-selected="false" aria-level="2" id="j4_3_anchor">
										<i className="jstree-icon jstree-themeicon flaticon2-hourglass-1 text-danger jstree-themeicon-custom" role="presentation"></i>Custom Icon
									</a></li>
                                    <li data-jstree='{ "opened" : true }'>Root node
                                        <ul>
                                            <li data-jstree='{ "selected" : true }'>Child node 1</li>
                                            <li>Child node 2</li>
                                            <li data-jstree='{ "opened" : true }'>Root node
                                                <ul>
                                                    <li data-jstree='{ "selected" : true }'>Child node 1</li>
                                                    <li>Child node 2</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
		</>
	);
}

export default Treeview;
