import React, { useState } from 'react';
import './AppXY.css';

// 리액트에서 상태를 객체단위로 보관하고 업데이트 하는 방법
export default function AppXY() {
  // 서로 연관있는 data라면 객체로 묶어서 관리(업데이트가 동시에 일어나야 되는 경우)
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });

  return (
    <div
      className='container'
      onPointerMove={(e) => {
        // 만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({ ...prev, clientX: e.clientX }));
      }}
    >
      <div
        className='pointer'
        style={{
          transform: `translate(${position.clientX}px, ${position.clientY}px)`,
        }}
      ></div>
    </div>
  );
}
