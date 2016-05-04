/* Dumb Component
  - Simply using this to represent how our component visually should be displayed on the UI.
  - Alot easier to maintain this way and read how our component should look
  - This may look different from your normal way of seeing a react component but this is what is called a "stateless" component so we can define it via a function
*/

import React, { PropTypes } from 'react';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {/* Map through all the todos which are passed down from our TodoListContainer component as can be seen on Line 39 of TodoListContainer.jsx as a prop todos */}
        {props.todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
    </div>
  );
}

// Declare the props which this component should recieve
TodoList.PropTypes = {
  todos: React.PropTypes.obj
}

export default TodoList;
