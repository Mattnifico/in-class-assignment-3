import React from 'react';
import {useState} from 'react';
import './DynamicCounter.css'

function DynamicCounter() {

    const [counter, setCounter] = useState(0);

    const handleAddition = () => {
        setCounter(prevCount => prevCount + 1);
    }

    const handleSubtraction = () => {
        setCounter(prevCount => prevCount - 1);
    }

  return (
    <div className='box'>
        <div className='row1'>
            {/* text input */}
            <p>{counter}</p>
        </div>

        <div className='row2'>
            {/* 2 buttons with a + and - */}
            <button onClick={handleAddition}>+</button>
            <button onClick={handleSubtraction}>-</button>
        </div>
    </div>
  )
}

export default DynamicCounter