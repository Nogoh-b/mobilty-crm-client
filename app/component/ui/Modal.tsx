"use client"
import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { footerMenuDatas } from '../../constants/FooterConstants';
import NabButton from './NabButton';

function Modal() {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index : number) =>{
		setActiveIndex(index);
	}
  return (
    <>

        <div className="modal fade" id="exampleModalCenter">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button className="btn-close" data-bs-dismiss="modal">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-danger light" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-sm btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default Modal;
