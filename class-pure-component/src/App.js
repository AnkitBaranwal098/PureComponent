import React, { PureComponent } from "react";

// Pure Component with State
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    console.log("Re-render")
    return (
      <div>
        <h1>Class Component {this.state.count}</h1>
        <button onClick={()=>{this.setState({count: 10})}}>
          Update State
        </button>
      </div>
    );
  }
}

export default App;
