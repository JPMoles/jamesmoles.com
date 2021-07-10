import React from "react";
import "./Hello.css"

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

const divElement = <div tabIntex="0"></div>
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
      message.push(<WelcomeMessage user={users[i]} />);
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