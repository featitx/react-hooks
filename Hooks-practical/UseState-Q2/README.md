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

1) Do not copy or use chatgpt (You can use Google for basic understanding and )
2) If got any error try to learn and resolve it by your own 



### OUTPUT images 

<img src = "../output-images/output-1.png" height = 100px width 150px>