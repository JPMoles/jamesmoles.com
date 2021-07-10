
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const name = 'James Moles';
const element = <h1>Hello, {name}!</h1>;

const user = {
    firstName: 'James',
    lastName: 'Moles',
};

const text = <h1>Hello, {formatName(user)}, goodbye!</h1>;
const buttonStyle = {color: 'blue'};

const divElement = <div tabIntex="0"></div>
const buttonElement = <button style={buttonStyle}>Click me!</button>

function Hello() {
  return (
    <div>
        {element}
        {text}
        {buttonElement}
    </div>
  );
}

export default Hello;