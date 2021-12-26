import React from 'react';

const todo = ({ text }) => {
  const deleteHandler = () => {
    console.log('clicked!');
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default todo;
