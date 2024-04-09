// import React, { Component, useState } from 'react'
import React, {useState} from 'react'
import "./Board.css"
import Square from './Square'

// export default class Board extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             squares: Array(9).fill(null)
//         }
//     }
//     handleClick(i){
//         const squares=this.state.squares.slice();
//         squares[i]="X";
//         this.setState({squares:squares});
//     }
//     renderSquare(i){
//         return <Square value={this.state.squares[i]}
//                        onClick={()=>this.handleClick(i)} />
//     }
//     render() { 
//       return (
//         <div>
//           <div className="staus">
//               next player: X, O
//           </div>
//           <div className="bord-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="bord-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="bord-row">    
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       )
//     }
// }


// const Board = ({squares, onClick}) =>{
//   //3x3 배열
//   //const [squares, setSquares] = useState(Array(9).fill(null));
//   // //X O 판별
//   // const [xIsNext, setxIsNext] = useState(true);

//   // //클릭 시 X O 변환
//   // const handleClick = (i) => {
//   //   const newSquares = squares.slice();

//   //   if(calculateWinner(newSquares) || newSquares[i]){
//   //     return;
//   //   }

//   //   newSquares[i] = xIsNext ? "X" : "O";
//   //   setSquares(newSquares);
//   //   //setxIsNext(!xIsNext);
//   //   setxIsNext(current => !current);
//   // }

//   //Square에서 누른 자리 이벤트 발생
//   const renderSquare = (i) => {
//     return <Square value={squares[i]} 
//                     onClick={()=>onClick(i)}/>
//   }

//   // //승패 결정
//   // const calculateWinner = (squares) => {
//   //   const lines = [
//   //     [0,1,2],
//   //     [3,4,5],
//   //     [6,7,8],
//   //     [0,3,6],
//   //     [1,4,7],
//   //     [2,5,8],
//   //     [0,4,8],
//   //     [2,4,6]
//   //   ]
//   //   for (let i = 0; i < lines.length; i++) {
//   //     const [a,b,c] = lines[i];
//   //     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//   //       return squares[a];
//   //     }
//   //   return null;
//   //   }
//   // }

//   // //승자 표시
//   // const winner = calculateWinner(squares);
//   // let status;
//   // if(winner) {
//   //   status = "winner : " + winner;
//   // }else{
//   //   status = "Next player : " + (xIsNext? "X" : "O");
//   // }

//   return(
//     <div className="board-wrapper">
//       <div className='bord-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='bord-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='bord-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   )
// }
// export default Board;

//코드 정리
const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
      return <Square value={squares[i]}
          onClick={() => onClick(i)} />
  }

  return (
      <div className='board-wrapper'>
          <div className='board-row'>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
          </div>
          <div className='board-row'>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
          </div>
          <div className='board-row'>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
          </div>
      </div>
  )

}

export default Board