// import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
//
// const CountPage = () => {
//     const count = useSelector(state => state.countTitle)
//     const dispatch = useDispatch()
//     const increment = ()=>{
//         dispatch({
//             type:"INCREMENT",
//         })
//     }
//     const decrement = ()=>{
//         dispatch({
//             type:"DECREMENT"
//         })
//     }
//     const reset = ()=>{
//         dispatch({
//             type:"RESET"
//         })
//     }
//     const plus10 = ()=>{
//         dispatch({
//             type:"PLUS10"
//         })
//     }
//     const mine10 =()=>{
//         dispatch({
//             type: "MINE10"
//         })
//     }
//
//
//
//     return (
//         <div>
//             <h1 style={{
//                 color:"#deb8b8"
//             }}>{count}</h1>
//                 <button onClick={reset} style={{
//                     margin:"10px",
//                     width:"50px",
//
//                 }}>reset</button>
//                 <button onClick={increment} style={{
//                     marginLeft:"10px",
//                     width:"40px",
//                     borderRadius:"50%"
//
//                 }}>+</button>
//                 <button onClick={decrement} style={{
//                     marginRight:"10px",
//                     width:"40px",
//                     borderRadius:"50%",
//                 }}>-</button>
//                 <button onClick={plus10} style={{
//                     margin:"10px",
//                     width:"50px",
//                 }}>10+</button>
//             <button onClick={mine10} style={{
//                 width:"50px",
//             }}>-10</button>
//
//
//         </div>
//     );
// };
//
// export default CountPage;