import React from 'react';
import ReactDOM from 'react-dom';


function Todo(props){
  let start;
  let end;
  return (props.task.completed) ?
    (<li><button onClick={()=>{props.todoXClick(props.index)}}>X</button>
        <strike>{props.task.taskText}</strike>
        <button onClick={()=>{props.itemToggle(props.index)}}>Completed</button></li>) :
    (<li><button onClick={()=>{props.todoXClick(props.index)}}>X</button>
        {props.task.taskText}
        <button onClick={()=>{props.itemToggle(props.index)}}>Completed</button></li>)

}



export default Todo;
