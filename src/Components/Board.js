import React from 'react';
import Square from '../Components/Square';
import "../Styles/Board.css";


export default function Board ({xisNext, squares, onPlay}) {
  // const [xisNext, setXisNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if (xisNext){
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O'; 
    }
    // setSquares(nextSquares);
    // setXisNext(!xisNext);
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = 'winner: ' + winner;
  } else {
    status = 'Next player: ' + (xisNext? 'X' : 'O');
  }

  function CalculateWinner () {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
    }
  }


  return (
    <div className="box">
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </div>
  );
}
