
import React, { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(9);
    const total = 59;

    return(
        <div className='show-more_btn'>
        <p>showing 6 0f 59</p>
        <button  onClick={() => setCount(count + 1)}>Show more</button>
      </div>
    )
  }

  export default Counter