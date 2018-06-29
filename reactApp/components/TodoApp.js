import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList'

const dummyData = [{ taskText: "Lorem ipsum dolor sit amet", completed: false },
                   { taskText: "consectetur adipisicing elit, sed do eiusmod tempor ", completed: true },
                    { taskText: "incididunt ut labore et dolore magna aliqua. Ut enim ad ", completed: true },
                     { taskText: "inim veniam, quis nostrud exercitation ullam", completed: false }]



class TodoApp extends React.Component {
 constructor(props){
   super(props);
   this.state = ({
     todos: []
   });
 }
 componentDidMount(){
   this.setState({
     todos: dummyData
   });
 }
 render(){
   return (<div>
             <InputLine />
             <TodoList todos = {this.state.todos}/>
           </div>);
 }
}

export default TodoApp;
