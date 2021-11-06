import { useState } from "react";
import { useStateValue } from "../contexts/stateContext";


const Calculator = ()=>{
    const [screen, setScreen] = useState(0)
    const [state, dispatch] = useStateValue()
    const add = (s)=>{
        if(screen === 0){
            setScreen(s)
        }else{
            setScreen(screen+s)
        }
    }
    const calcResult = () => {
        let r = eval(screen.toString());

        dispatch({
            type: 'addCalc',
            calc: `${screen} = ${r}`
        });

        setScreen(r);
    }
    return(
        <div className='content'>
            <div className='screen'>
                <p>{screen}</p>
            </div>
            <div className='buttons'>
                <div className='key' onClick={()=>(setScreen(0))}>C</div>
                <div className='key' onClick={()=>add('/')}>/</div>
                <div className='key' onClick={()=>add('*')}>*</div>
                <div className='key' onClick={()=>add('-')}>-</div>
                <div className='key' onClick={()=>add('7')}>7</div>
                <div className='key' onClick={()=>add('8')}>8</div>
                <div className='key' onClick={()=>add('9')}>9</div>
                <div className='key' onClick={()=>add('+')}>+</div>
                <div className='key' onClick={()=>add('4')}>4</div>
                <div className='key' onClick={()=>add('5')}>5</div>
                <div className='key' onClick={()=>add('6')}>6</div>
                <div className='key' onClick={()=>calcResult()} >=</div>
                <div className='key' onClick={()=>add('1')}>1</div>
                <div className='key' onClick={()=>add('2')}>2</div>
                <div className='key' onClick={()=>add('3')}>3</div>
                <div className='key' onClick={()=>add('0')}>0</div>   
            </div>
        </div>
    )
}

export default Calculator;