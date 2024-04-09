import React from "react";
import "./Square.css"

// export default class Square extends React.Component{
//     render(){
//         return(
//             <button className="square"
//                     onClick={()=>this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

const Square = ({ onClick, value }) => {
    return(
        <button className="square"
                onClick={onClick}>
            {value}
        </button>
    )
}
export default Square;