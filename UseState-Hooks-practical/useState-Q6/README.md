### Question: Dynamic Form Fields

Create a React component for a dynamic form with the ability to add and remove input fields. Use the useState hook to manage the state of the form fields. Each form field should have a label, an input field, and a button to remove that specific field.

```javascript
import React, { useState } from 'react';

const DynamicForm = () => {
  // Your code here

  return (
    <div>
      <form>
        {/* Display dynamic form fields based on the state */}
        {/* Each field should have a label, an input, and a button to remove it */}
      </form>

      <button onClick={() => /* Add a new form field to the state */}>
        Add Field
      </button>
    </div>
  );
};

export default DynamicForm;

```

### NOTE & HINT :

use of ***prevent default*** is necessary  !

### Things you will learn from this 

State Management:
You use the useState hook to create state variable newInput, which is an array holding JSX elements representing the dynamic form fields.

Adding Input Fields:
The addInput function returns a JSX element with a label, an input field, and a delete button. It's given a unique key based on the index.

Adding New Input Field:
The addNewInput function adds a new input field to the newInput state by creating a new array with the existing elements and the newly added input field using the addInput function.

Deleting Input Field:
The deleteInput function removes an input field based on its index by using the filter function to create a new array without the specified input field.

Rendering:
The newInput.map function is used to render the dynamic form fields based on the current state.

Form Submission:
The handleSubmit function is connected to the form's onSubmit event, preventing the default form submission behavior.
