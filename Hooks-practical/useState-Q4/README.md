### Question 4: Conditional Rendering with useState

Create a React component that includes a button. Initially, the button should display the text "Show Details." When the button is clicked, it should toggle between displaying and hiding additional details. Use the useState hook to manage the state for toggling the details.

```javascript
import React, { useState } from 'react';

const ToggleDetails = () => {
  // Your code here

  return (
    <div>
      <button onClick={() => /* Toggle the display of additional details */}>
        {/* Display "Show Details" or "Hide Details" based on the state */}
      </button>

      {/* Conditionally render additional details based on the state */}
      {/*
        Example:
        {showDetails && (
          <div>
            <p>Additional details go here</p>
          </div>
        )}
      */}
    </div>
  );
};

export default ToggleDetails;


```


#### Now you're aware of rules.
so start coding 

### Things You'll learn in this 

1) State Management: 
Utilizes the useState hook to manage the state of whether details should be displayed or hidden. The initial state is set to true.

2) Conditional Rendering: 
Details are conditionally rendered based on the state using the ternary operator. If the detail state is true, a <ul> with list items is displayed; otherwise, an empty fragment is rendered.

3) Toggle Button: 
The button text and functionality are dynamically determined based on the detail state. If details are hidden (detail is false), the button says "Show Detail" and, when clicked, sets detail to true. If details are displayed (detail is true), the button says "Hide Detail" and, when clicked, sets detail to false.