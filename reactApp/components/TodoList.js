import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'


function TodoList(props){
  return (<ul>
            {props.todos.map((data) => <Todo task ={data}/>)}
          </ul>);
}


export default TodoList;
