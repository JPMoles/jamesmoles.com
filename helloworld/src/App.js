import logo from "./logo.svg";
import "./App.css";

function Test() {
    return <h3>Test text!</h3>;
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <a className="Scroll-link App-link" href="#beep-boop" rel="noopener noreferrer">
                    Scroll down 👇
                </a>
            </header>
        </div>
    );
}

export { App, Test };
