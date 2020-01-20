import React, { Component } from "react";
import { render } from "reacr-dom";

export class Child extends React.Component {
  sendMessage() {
    console.log("Child SendMessage");
    this.props.messageHandler("Hai");
  }

  render() {
    return (
      <div>
        <p>initial:{this.props.initial}</p>
        <button onClick={this.sendMessage.bind(this)}>
          Send message 1 to Parent
        </button>
         <button onClick={()=>{this.props.messageHandler2("Hello")}}>
          Send message 2 to Parent
         </button>
      </div>
    );
  }
}
