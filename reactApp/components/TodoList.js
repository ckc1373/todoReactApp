import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'


function TodoList(props){
  return (<ul>
            {props.todos.map((data, i) => <Todo key = {data._id} id = {data._id} task ={data}
                                                todoXClick = {(e)=>{props.XClick(e)}}
                                                itemToggle = {(e)=>{props.toggleThis(e)}}/>)}
          </ul>);
}


export default TodoList;
