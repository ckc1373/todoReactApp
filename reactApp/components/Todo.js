import React from 'react';
import ReactDOM from 'react-dom';


function Todo(props){
  let start;
  let end;
  return (props.task.completed) ?
    (<li><button onClick={()=>{props.todoXClick(props.id)}}>X</button>
        <strike>{props.task.task}</strike>
        <button onClick={()=>{props.itemToggle(props.id)}}>Completed</button></li>) :
    (<li><button onClick={()=>{props.todoXClick(props.id)}}>X</button>
        {props.task.task}
        <button onClick={()=>{props.itemToggle(props.id)}}>Completed</button></li>)

}



export default Todo;
