import React, { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import DeleteEmployeeModal from "./modals/DeleteEmployeeModal";

const Employee = ({ index,emloyeeName, employeeAge, employeeTitle }) => {
  const [name, setName] = useState(emloyeeName),
    [age, setAge] = useState(employeeAge),
    [title, setTitle] = useState(employeeTitle),
   [isDeleteModal, setIsDeleteModal] = useState(false);

    // const editEmployee = (index, emloyeeName, employeeAge, employeeTitle) => {
    //     setName((prev) => {
    //         const newArr = [...prev];//first we add the prev in new array
    //         newArr[index] = todoName;
    //         return newArr; //return newarray
    //     });
    // };

    console.log('isDeleteModal', isDeleteModal)


  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const editHandler = () => {
    console.log('edit!');
  };

  const openDeleteModalHandler = () => {
      setIsDeleteModal(true);
      console.log('openDeleteModalHandler');
  }

    const cancelHandler = () => {
      setIsDeleteModal(false);
    }

    const deleteEmployeeHandler = () => {
      setIsDeleteModal(false);
    }

  return (
    <div className="card">
      <h2>Employee name is {emloyeeName}</h2>

      <input type="text" value={name} onChange={nameHandler} />
      <input type="text" value={title} onChange={titleHandler} />
      <input type="number" value={age} onChange={ageHandler} />

      <div className="actions">
        <button className="btn" onClick={openDeleteModalHandler}>
          Delete Employee
        </button>
        <button className="btn" onClick={editHandler}>
          Edit Employee
        </button>
      </div>
        <DeleteEmployeeModal show={isDeleteModal} cancelHandler={cancelHandler} deleteEmployeeHandler={deleteEmployeeHandler} />
    </div>
  );
};

export default Employee;
