import React , {useState} from 'react';

const Counter = () => {
    const initialCounterValue = 0;

    const [counter, setCounter] = useState(initialCounterValue);

    const incrementHandler = () =>{
        console.log("IncrementHandler has been executed!");
        setCounter(counter + 1);
    }

    const decrementHandler = () =>{
        console.log("decrementHandler has been executed!");
        setCounter(counter - 1);
    }

    const resetHandler = () =>{
        console.log("resetHandler has been executed!");
        setCounter(initialCounterValue);
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementHandler} >Increment</button>
            <button type='button' className='btn btn-danger' onClick={decrementHandler}>Decrement</button>
            <button type='button' className='btn btn-warning' onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default Counter;