import React from 'react';
import ReactDOM from 'react-dom';


function InputLine(props){
  return(<div>
           <input type="text" placeholder ="Add an Item"></input>
           <button type = "submit" onClick = {()=>{props.submit('Test Task')}}>Add Item</button>
         </div>)
}


export default InputLine;
