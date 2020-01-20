import React, { Component } from "react";
import { render } from "react-dom";
import { Child } from "./child";
export class Parent extends React.Component {
  state = {
    name: "Chethan",
    initial: "D C",
    message: ""
  };
  constructor() {
    console.log(this.state);
  }

  parentMessageHandler = message => {
    {
      debugger;
      console.log(message);
     // const newState = Object.assign({}, this.state);
     // newState["message"] = message;
      //console.log(newState);
      this.setState({message: message});
      //this.

    }
  };

  parentMessageHandler2(message){
    console.log(message);
    this.setState({message2:message})
  }
  render() {
    return (
      <div>
        <p>Name:{this.state.name}</p>

        <Child
          messageHandler={this.parentMessageHandler}
          messageHandler2={this.parentMessageHandler2.bind(this)}
          initial={this.state.initial}
        />
        <p>{this.state.message}</p>
         <p>{this.state.message2}</p>
      </div>
    );
  }
}
