import React from 'react';
import Backdrop from "./Backdrop";

const Modal = ({ onCancel, onConfirm, show, children }) => {
    const cancelHander = () => {
        onCancel();
    };
    const confirmHandler = () => {
        onConfirm();
    };

    return (
        <>
            {show && <Backdrop />}
            <div className={`modal ${!show ? 'inactive-modal' : ''}`}>
                <div className='modal-body'>
                    {children}
                    <button className="btn btn--alt" onClick={cancelHander}>
                        {' '}
                        Cancel
                    </button>
                    <button className="btn" onClick={confirmHandler}>
                        Confirm
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;
