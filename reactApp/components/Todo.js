import React from 'react';
import ReactDOM from 'react-dom';


function Todo(props){
  let start;
  let end;
  return (props.task.completed) ?
    (<li><button>X</button><strike>{props.task.taskText}</strike></li>) :
    (<li><button>X</button>{props.task.taskText}</li>)

}



export default Todo;
