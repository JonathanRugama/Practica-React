import React from 'react'
import useCounter from '../CustomHooks/useCounter'
const Counter = () => {

    const counterOne = useCounter()
    return (
        <div className='data'>
                {counterOne.count}
            <br/>
            <button onClick = {counterOne.increase}>Aumentar</button>
            <button onClick = {counterOne.decrease}>Decrementar</button>
            </div>
    )
} 
export default Counter