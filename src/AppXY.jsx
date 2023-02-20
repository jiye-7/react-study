import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  /**
   * PointerEvent 객체에서 clientX, clientY 값 가져오기 -> event가 일어날 때 마다 state에 저장
   * pointer div에 style={{width: {}, height: {}}} 주기
   */

  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  return (
    <div
      className='container'
      onPointerMove={(e) => {
        setClientX(e.clientX);
        setClientY(e.clientY);
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${clientX}px, ${clientY}px)` }}
      ></div>
    </div>
  );
}
