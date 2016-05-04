/* Smart Component
  - Handles the business logic of our application:
    - Gathers the todos from the todos.json files and stores them into the state which we will use to pass to our view.
    - Imports the "Dumb" component in this case the TodoList component and passes the todos to the TodoList component via a prop called todos
*/

import React, { Component } from 'react';
import TodoList from './TodoList.jsx';

export default class TodoListContainer extends Component {
  constructor() {
    super();
    // Set the initial todos to be an empty array
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    // Get the todos from the json file
    $.ajax({
     url: "/todos.json",
     dataType: 'json',
     success: (todos) => {
       // Store the todos into the state
       this.setState({todos});
     },
     error: (error) => {
       // If there is any error from gathering the todos from our json file
       console.log(error);
     }
   });
  }

  render() {
    return (
      <div>
        {/* Return the dumb component which will handle the UI for our app and pass the todos down the tree via props */}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
