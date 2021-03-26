import React, { Component } from "react";

class MyFirstClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter:0,
            ChangedBy: "Sandhya"
        };
    }
    static getDrivedStateFromProps() {
        console.log("This Is Derived State From Props")
        return null;
    }
    componentDidMount(){
        console.log("This Is Component Did Mount")
    }
    shouldComponentUpdate() {
        console.log("This is Should Component Update")
        return true;
        }
      componentWillUnmount() {
          console.log("This is Component Unmount")
      }
    MyButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            counter:this.state.counter + 1,
            ChangedBy: "Veda"
        });
    };
  
render() {
    return (
        <div>
            <h1>This My Class Component {this.state.counter} this counter changed by {this.state.ChangedBy} {this.props.mydatahere}</h1>
            <button onClick={(e) => this.MyButtonClick(e)}>Click Here</button>
        </div>
    );
}

}
export default MyFirstClassComponent;  








