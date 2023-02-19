import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const handleClick = () => setTotalCount((prev) => prev + 1);

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {totalCount} {totalCount > 10 ? '🔥' : '🐥'}
      </div>
      <Counter total={totalCount} onClick={handleClick} />
      <Counter total={totalCount} onClick={handleClick} />
    </div>
  );
}
