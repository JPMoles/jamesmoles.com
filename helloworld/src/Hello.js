import React from "react";
import "./Hello.css"
import ReactDOM from "react-dom";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const name = 'James Moles';

// React element that represents DOM tags
const element = <h1>Hello, {name}!</h1>;

const user = {
    firstName: 'James',
    lastName: 'Moles',
};

// React element that represents DOM tags
const text = <h1>Hello, {formatName(user)}, goodbye!</h1>;
const buttonStyle = {color: 'blue'};

// const divElement = <div tabIntex="0"></div>
const buttonElement = <button style={buttonStyle}>Click me!</button>

// Function Component, user defined element (component) contains JSX attributes and children passed to it through props
export function Hello(props) {
  return (
    <div>
        <h1>Beep Boop, {props.name}</h1>
        {element}
        {text}
        {buttonElement}
    </div>
  );
}

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div className="WelcomeMessage">
        <h2>Welcome, {this.props.user}!</h2>
      </div>);
  }
}

const users = ["Josh", "Patrick", "Sean", "Alice", "Bob"];

// Class Component
export class WelcomeBoard extends React.Component {
  render() {
    let message = [];
    for(let i = 0; i < users.length; i++) {
      message.push(<WelcomeMessage key={i} user={users[i]} />);
    }

    return (
        <div className="WelcomeBoard">
          {message}
        </div>
      );
  }
}

/**
 * Notes:
 * 
 * - React Components must start with a capital letter
 * - Components should Never modify thier own props 
 * 
 */


 function tick() {
  const element = (
    <h1>Time: {new Date().toLocaleTimeString()}</h1>
  );
  ReactDOM.render(element, document.getElementById('clock'));
}

// Javascript function that calls tick() every 1000ms = 1 second
setInterval(tick, 1000);
// Only the time is being updated instead of the whole <h1></h1> and text

// ^^ This is a poor way to perform updates to the 


// Clock component, using state to hold time, and the a timer is setup with componentDidMount() when the component is added to the DOM tree
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Clock - time: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

