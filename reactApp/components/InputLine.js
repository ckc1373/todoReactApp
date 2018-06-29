import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText:''
    }
  }

  handleTyping(e){
    this.setState({
      typedText: e.target.value
    })
  }

  render(){
    return(<div>
               <input type="text" placeholder ="Add an Item" value = {this.state.typedText}
                      onChange = {(e)=>{this.handleTyping(e)}}></input>
               <button type = "submit" onClick = {
                  ()=>{this.props.submit(this.state.typedText);
                    this.setState({typedText:''})
                    }}>Add Item</button>
             </div>)
    }

}


export default InputLine;
