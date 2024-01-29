### Question 3: Dynamic List with useState (Basic Todo)

Create a React component that manages a dynamic list of items. Use the useState hook to maintain the list state. The component should include an input field for adding new items to the list and display the list of items. Each item in the list should have a button next to it, allowing the user to remove that specific item.

```javascript
import React, { useState } from 'react';

const DynamicList = () => {
  // Your code here

  return (
    <div>
      <input
        type="text"
        value={/* The value of the input field for adding new items */}
        onChange={(e) => /* Handle input change and update the state */}
      />
      <button onClick={() => /* Add the current input value to the list */}>
        Add Item
      </button>

      <ul>
        {/* Display the list of items with a button to remove each item */}
        {/* Use the map function to iterate over the list and render each item */}
      </ul>
    </div>
  );
};

export default DynamicList;
```

### Rules.

1. Do not copy or use chatgpt (You can use Google for basic understanding and )
2. If got any error try to learn and resolve it by your own


## Things you got to learn

1) State Management:
You use the useState hook to manage the input field value (value) and the list of items (list).

2) Input Field Handling:
The onChangeHandle function is responsible for updating the value state when the user types in the input field.

3) Adding Items:
The handleAdd function adds the current value (value) to the list using the spread operator (...) to create a new array. After adding the item, it clears the input field by setting value to an empty string.

4) Removing Items:
The handleDelete function removes an item from the list based on its index. It uses the filter function to create a new array that excludes the item to be deleted.

5) Rendering:
The list of items is displayed using the map function. Each item is rendered inside an <li> element, along with a "Delete" button that triggers the handleDelete function.