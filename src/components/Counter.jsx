import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          /* 
          closer, snapshot된 외부 값을 가지고 계산
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1); */
          /* 
          이전 상태값을 토대로 계산
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1); */
        }}
      >
        Add +
      </button>
    </div>
  );
}
