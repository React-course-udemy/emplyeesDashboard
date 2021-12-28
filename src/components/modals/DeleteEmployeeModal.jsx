import React from 'react';
import Modal from "../Modal";

const DeleteEmployeeModal = ({show, cancelHandler, deleteEmployeeHandler}) => {
    const closeModalHandler = () => {
        cancelHandler();
    };

    const deleteHandler = () => {
        deleteEmployeeHandler();
        console.log('delete');
    };

    console.log('DeleteEmployeeModal', show);

    return (
        <Modal onCancel={closeModalHandler} onConfirm={deleteHandler} show={show}>
            <p>Are you sure you want to delete the selected employee?</p>
        </Modal>
    );
};

export default DeleteEmployeeModal;