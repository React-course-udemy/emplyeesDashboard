import React, { useState } from 'react';

import Employee from './components/Employee';

const App = () => {
    const [employees, setEmployees] = useState([
        { name: 'John Doe', age: 38, title: 'Software Engineer' },
    ]);

    const addEmployee = (name , age , title) => {
        setEmployees((prev)=>{
            const newEmployee = [...prev];
            newEmployee.push({name, age, title});
            return newEmployee;
        })
    };
    const deleteEmployee = (index) => {
        setEmployees((prev) => {
            const newEmployee = [...prev];
            return newEmployee.filter((el, i) => {
                return i !== index;
            });
        });
    };

    return (
        <div>
            <h1>Employees list</h1>
            <button onClick={addEmployee}> Add New Employee</button>
            {employees.map((el, i) => (
                <Employee
                    emloyeeName={el.name}
                    employeeAge={el.age}
                    employeeTitle={el.title}
                    index={i}
                    key={i}
                />
            ))}
        </div>
    );
};

export default App;
