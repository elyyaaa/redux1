import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {divideAction, mineAction, multiplyAction, plusAction} from "../../redux/action";
import {useState} from "react";

const CalculatorPage = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const result = useSelector(state => state.calculatorReducer.result);
    const dispatch = useDispatch()
    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const plus = () => {
        dispatch(plusAction(Number(number1), Number(number2)));
    }
    const mine = ()=>{
        dispatch(mineAction(Number(number1), Number(number2)))
    }
    const multiply = ()=>{
        dispatch(multiplyAction(Number(number1), Number(number2)))
    }
    const divide = ()=>{
        dispatch(divideAction(Number(number1), Number(number2)))
    }

    return (
        <div>
            <input type="number" value={number1} onChange={(e) => handleInputChange(e, setNumber1)} />
            <input type="number" value={number2} onChange={(e) => handleInputChange(e, setNumber2)} />

            <button onClick={plus} style={{
                marginLeft:"5px",
                width:"40px",
                height:"30px",
                fontSize:"20px",
                backgroundColor:"orange",
                borderRadius:"40%"

            }}>+</button>
            <button onClick={mine} style={{
                margin:"5px",
                width:"40px",
                height:"30px",
                fontSize:"20px",
                backgroundColor:"orange",
                borderRadius:"40%"

            }}>-</button>
            <button onClick={multiply} style={{
                marginRight:"5px",
                width:"40px",
                height:"30px",
                fontSize:"20px",
                backgroundColor:"orange",
                borderRadius:"40%"

            }}>*</button>
            <button onClick={divide} style={{
                width:"40px",
                height:"30px",
                fontSize:"20px",
                backgroundColor:"orange",
                borderRadius:"40%"

            }}>/</button>
            <div style={{
                margin:"10px",
                border:"2px solid gray",
                backgroundColor:"black",
                color:"white",
                borderRadius:"4px",
                height:"40px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>RESULT: {result}</div>
        </div>
    );
};

export default CalculatorPage;