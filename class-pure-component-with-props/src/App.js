import './App.css';
import React, {Component} from "react";
import Counter from './Counter';
class App extends Component{
  constructor(){
    super();
    this.state = {
      count : 1
    }
  }

  render(){
    return (
      <div>
        <Counter count = {this.state.count}/>
        {/* <button onClick={()=>{this.setState({count : this.state.count+1})}}>
          Update
        </button> */}
        <button onClick={()=>{this.setState({count : 10})}}>
          Update
        </button>
      </div>
    )
  }
}

export default App;
