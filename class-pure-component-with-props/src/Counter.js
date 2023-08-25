import React , {PureComponent} from "react";

class Counter extends PureComponent{
    render(){
        console.log("Re-render")
        return (
            <div>
                <h1>Counter : {this.props.count}</h1>
            </div>
        )
    }
}

export default Counter;