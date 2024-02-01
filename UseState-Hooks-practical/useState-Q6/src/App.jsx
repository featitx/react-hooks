import React, { useState } from "react";

const App = () => {
  const [newInput, setNewInput] = useState([]);

  const addInput = (index) => (
    <div key={index}>
      <label>
        <input type="text" />
      </label>
      <button onClick={() => deleteInput(index)}>Delete</button>
    </div>
  );

  const addNewInput = () => {
    setNewInput([...newInput, addInput(newInput.length)]);
  };

  const deleteInput = (index) => {
    setNewInput((prevInputs) => prevInputs.filter((input, i) => i !== index));
    
  };

  function handleSubmit(event) {
    event.preventDefault();
    // event.stopPropagation();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>{newInput.map((input, index) => input)}</form>
      <button onClick={addNewInput}>Add Field</button>
    </>
  );
};

export default App;
