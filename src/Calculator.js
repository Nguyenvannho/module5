import {useState} from "react";

function Calculator(){
const [number,setNumber] = useState(0);
const [number2,setNumber2] = useState(0);
const [result,setResult] = useState(0)

    function handleChangeNumber(e) {
      setNumber(e.target.value)

    }
    function handleChangeNumber2(e) {
      setNumber2(e.target.value)
    }
    function handleClickAdd(){
      setResult( number/1 + number2/1)
    }
    function handleClickSub(){
      setResult( number/1 - number2/1)
    }
    function handleClickMulti(){
      setResult( number/1 * number2/1)
    }
    function handleClickDivide(){
      setResult( (number/1) / (number2/1))
    }
    return (
        <div>
            <input type='number' onChange={handleChangeNumber}/>
            <input type='number' onChange={handleChangeNumber2}/>
            <button type='button' onClick={handleClickAdd}>+</button>
            <button type='button' onClick={handleClickSub}>-</button>
            <button type='button' onClick={handleClickMulti}>X</button>
            <button type='button' onClick={handleClickDivide}>/</button>
            <p>result: {result}</p>
        </div>
    )
}

export default Calculator