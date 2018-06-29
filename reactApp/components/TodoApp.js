import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList'
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
 constructor(props){
   super(props);
   this.state = ({
     todos: []
   });
 }

 addTodo(task){
   let thisState = this;
   axios.post(dbUrl + '/add', {task: task, completed: false})
     .then(function (response) {
       thisState.setState({ todos: [...thisState.state.todos, {task: task, completed: false}]});
     })
     .catch(function (error) {
       console.log(error);
     });
 }

 removeTodo(id){
   let thisState = this;
   axios.post(dbUrl + '/remove', {id: id})
    .then(function (response) {
      let oldTodo = thisState.state.todos;
      var index = oldTodo.findIndex((item) => {
        return item._id === id
      })
      oldTodo.splice(index, 1)
      thisState.setState({
        todos: oldTodo
      })
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }



 toggle(id){
   let thisState = this;
   axios.post(dbUrl + '/toggle', {id: id})
    .then(function (response) {
      let oldTodo = thisState.state.todos;
      var index = oldTodo.findIndex((item) => {
        return item._id === id
      })
      oldTodo.splice(index, 1, response.data)
      thisState.setState({
        todos: oldTodo
      })
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

 componentDidMount(){
   let thisState = this;
   axios.get(dbUrl + '/all')
    .then(function (response) {
      thisState.setState({
        todos: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
 }

 render(){
   return (<div>
             <InputLine submit = {(e)=>{this.addTodo(e)}}/>
             <TodoList todos = {this.state.todos} XClick = {(e)=>{this.removeTodo(e)}}
                       toggleThis= {(e)=>{this.toggle(e)}}/>
           </div>);
 }
}

export default TodoApp;
