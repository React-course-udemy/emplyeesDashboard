import React from 'react';
//components
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn Turkish" />
      <Todo text="learn Greek" />
      <Todo text="learn React" />
    </div>
  );
};

export default App;
