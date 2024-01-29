### Question: State Management for a Form

Create a React component that represents a simple form. Use the useState hook to manage the state of form input fields (e.g., username and email). Display the current values of the input fields below the form. When the user types into the input fields, update the corresponding state values.

```javascript 
import React, { useState } from 'react';

const SimpleForm = () => {
  // Your code here

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={/* State value for username */}
            onChange={(e) => /* Update the state value for username */}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={/* State value for email */}
            onChange={(e) => /* Update the state value for email */}
          />
        </label>
      </form>

      <div>
        <p>Current Username: {/* Display the current value of the username state */}</p>
        <p>Current Email: {/* Display the current value of the email state */}</p>
      </div>
    </div>
  );
};

export default SimpleForm;

```


### Things You will learn 

1) State Management:
You use the useState hook to create state variables for username and email, initialized with default values.

2) Input Fields:
The input fields for both username and email are controlled components. They are assigned values based on the corresponding state variables, and the onChange event is used to update the state when the user types into the input fields.

3) Updating State:
In the onChange event handlers, you use the setUsername and setEmail functions to update the state with the current value of the input fields.

4) Playing with forms:
Basic introduction of how actually form works in react  



