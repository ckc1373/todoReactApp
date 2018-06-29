import React from 'react';
import ReactDOM from 'react-dom';


const dummyData = ["Lorem ipsum dolor sit amet,", " consectetur adipisicing elit, sed do eiusmod tempor ",
                  "incididunt ut labore et dolore magna aliqua. Ut enim ad ", "inim veniam, quis nostrud exercitation ullam"]


class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(<li><button>X</button>{this.props.task}</li>)
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (<ul>
      {dummyData.map((data) => <Todo task ={data}/>)}
    </ul>);
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
