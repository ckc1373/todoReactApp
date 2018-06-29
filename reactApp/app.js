import React from 'react';
import ReactDOM from 'react-dom';


const dummyData = [{ taskText: "Lorem ipsum dolor sit amet", completed: false },
                   { taskText: "consectetur adipisicing elit, sed do eiusmod tempor ", completed: true },
                    { taskText: "incididunt ut labore et dolore magna aliqua. Ut enim ad ", completed: true },
                     { taskText: "inim veniam, quis nostrud exercitation ullam", completed: false }]


  function InputLine(props){
    return(<div>
             <input type="text" placeholder ="Add an Item"></input>
             <button type = "submit">Add Item</button>
           </div>)
  }


  function Todo(props){
    let start;
    let end;
    return (props.task.completed) ?
      (<li><button>X</button><strike>{props.task.taskText}</strike></li>) :
      (<li><button>X</button>{props.task.taskText}</li>)

  }

  function TodoList(props){
    return (<ul>
              {props.todos.map((data) => <Todo task ={data}/>)}
            </ul>);
  }


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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
