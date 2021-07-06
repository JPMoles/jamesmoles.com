import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
    <button className="square" onClick={props.onClick} style={{backgroundColor: props.winnerColor}}>
        {props.value}
    </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)} 
            winnerColor={this.props.squareColors[i]}
            />;
    }
  
    render() {
        let boardBoxes = [];
        let j = 0;
        for(let i = 0; i < 3; i++) {
            boardBoxes.push(
                <div key={i} className="board-row">
                    {this.renderSquare(0 + j)}
                    {this.renderSquare(1 + j)}
                    {this.renderSquare(2 + j)}
                </div>
            );
            j += 3;
        }

        return <div>{boardBoxes}</div>;

    /*
    return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
      );
    */
    }

    
}
  
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            buttonSelected: 0,
            squareColors: [ "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff" ],
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        let winner = calculateWinner(squares);
        if(squares[i]) {
            return;
        } else if (winner) {
            const colors = this.state.squareColors.slice();
            colors[winner.finalSquares[0]] = "#8BFF00";
            colors[winner.finalSquares[1]] = "#88FF00";
            colors[winner.finalSquares[2]] = "#88FF00";
            this.setState({
                squareColors: colors,
            });
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
                col: i % 3,
                row: Math.floor(i / 3),
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            buttonSelected: this.state.buttonSelected+1,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            buttonSelected: step,
        });
    }

    setBoldButton(move) {
        // console.log("Step: " + step + " Move: " + move);
        return this.state.buttonSelected === move ? {fontWeight: "bold"} : {fontWeight: "normal"};
    }

    render() {
    
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const colors = this.state.squareColors;

        const winner = calculateWinner(current.squares);

        // let boldButtonText = {"font-weight": "bold"};
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move + ' col: ' + history[move].col + ' row: ' + history[move].row : 'Go to game start';
            return (
                <li key={move}>
                    <button style={this.setBoldButton(move)} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if(winner) {
            status = 'Winner: ' + winner.player;
            console.log("winning squares: " + winner.finalSquares[0] + " " + winner.finalSquares[1] + " " + winner.finalSquares[2]);
        } else if (boardFilledNoWinner(current.squares)) { // Length 10 when index 9 is filled
            status = 'No Winner!';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
            <div className="game-board">
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    squareColors={colors}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <div className="study-page">
                <a href="study.html">Study page!</a>
            </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], finalSquares: lines[i].slice() };
      }
    }
    return null;
}

function boardFilledNoWinner(squares) {
    for(let i = 0; i < squares.length; i++) {
        if(squares[i] === null)
            return false;
    }
    return true;
}

// ========================================



ReactDOM.render(
    <Game />,
    document.getElementById('root')
);