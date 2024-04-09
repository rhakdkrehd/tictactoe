import { useState } from "react";
import './App.css';
import Board from './components/Board';

// function App() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board/>
//       </div>
//       <div className='game-info'>
//         game-info
//       </div>
//     </div>
//   );
// }
// export default App;

// function App() {

//   //Board / Square 에서 사용하기위해 최상위로 가져옴

//   //되돌리기 버튼 만들기
//   const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
//   //X O 판별
//   const [xIsNext, setxIsNext] = useState(true);

//   //승패 결정
//   const calculateWinner = (squares) => {
//     const lines = [
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [2,5,8],
//       [0,4,8],
//       [2,4,6]
//     ]
//     for (let i = 0; i < lines.length; i++) {
//       const [a,b,c] = lines[i];
//       if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//         return squares[a];
//       }
//     return null;
//     }
//   }

//   //승자 표시
//   //const current = history[history.length -1];
//   const current = history[history.length -1];
//   const winner = calculateWinner(current);
//   let status;
//   if(winner) {
//     status = "winner : " + winner;
//   }else{
//     status = "Next player : " + (xIsNext? "X" : "O");
//   }

//   //클릭시 X O 변환
//   const handleClick = (i) => {
//     //되돌리기 하기 위해 복사본 생성
//     const newHistory = history.slice(0,  stepNumber + 1);
//     //현재의 Current
//     const newCurrent = newHistory[newHistory.length - 1];
//     const newSquares = newCurrent.squares.slice();
//     //const newSquares = current.squares.slice();
    
//     if(calculateWinner(newSquares) || newSquares[i]){
//       return;
//     }
    
//     newSquares[i] = xIsNext ? "X" : "O";
//     //setHistory([...history, {squares: newSquares}]);
//     setHistory([...newHistory, {squares: newSquares}]);
//     setxIsNext(current =>!current);

//     setStepNumber(newHistory.length);
//   }

//   //되돌리기 생성
//   //li에 고유한 key값을 줌
//   //move는 history 배열의 index값으로 교유한 값이 됨
//   const moves = history.map((setp, move) => {
//     const desc = move ? "Go to move #" + move : "Go to game start";
//     return(
//       <li key={move}>
//         <button className="move-button" onClick={()=>jumpTo(move)}>
//           {desc}
//         </button>
//       </li>
//     )
//   })

//   //지금 몇 번째 step인지 알 수 있는 State
//   //돌아가기 위해 사용
//   const [stepNumber, setStepNumber] = useState(0);

//   //되돌리기 실행
//   const jumpTo = (step) => {
//     setStepNumber(step);
//     //짝수 일 때 setxIsNext를 true로 바꿈
//     setxIsNext((step % 2) === 0);
//   }

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board squares={current.squares} 
//                 onClick={(i)=>handleClick(i)} />
//       </div>
//       <div className='game-info'>
//         <div className="status">
//           {status}
//         </div>
//         <ol style={{listStyle : "none"}}>
//           {moves}
//         </ol>
//       </div>
//     </div>
//   );
// }
// export default App;

//코드 정리
function App() {

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext(prev => !prev);

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol style={{ listStyle: 'none' }}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;