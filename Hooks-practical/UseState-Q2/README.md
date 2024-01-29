### Question 2: Controlled Input with useState

Create a React component that includes an input field. Use the useState hook to manage the value of the input field. Display the current value of the input field below it. Additionally, implement a button that, when clicked, resets the input field to an empty string.

```javascript
import React, { useState } from 'react';

const App = () => {
  // Your code here

  return (
    <div>
      <input
        type="text"
        value={/* The value of the input field */}
        onChange={(e) => /* Handle input change and update the state */}
      />
      <p>Current Value: {/* Display the current value of the input field here */}</p>
      <button onClick={() => /* Reset the input field to an empty string */}>
        Reset Input
      </button>
    </div>
  );
};

export default App;
```

Im doing it src - App.jsx directly , You can make separate component

### Rules.

1. Do not copy or use chatgpt (You can use Google for basic understanding and )
2. If got any error try to learn and resolve it by your own


### Things you got to learn

- You use the useState hook to create a state variable change to manage the value of the input field.

- The handleOnChange function is passed to the onChange event of the input field. It updates the change state with the current value of the  input field whenever the user types something. Note that the function correctly uses e.target.value to get the input value.

- The value of the input field is set to the change state, ensuring that it is a controlled input.

- The current value of the input field is displayed below the input field.

- The "Reset Input" button, when clicked, calls setChange('') to reset the input field to an empty string.

### OUTPUT images

![Output Image 1](https://github.com/featitx/react-hooks/blob/master/Hooks-practical/UseState-Q2/src/output-images/output-1.png)
![Output Image 2](https://github.com/featitx/react-hooks/blob/master/Hooks-practical/UseState-Q2/src/output-images/Screenshot%202024-01-28%20152935.png)
