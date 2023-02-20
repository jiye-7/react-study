import React, { useEffect, useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  /**
   * PointerEvent 객체에서 clientX, clientY 값 가져오기 -> event가 일어날 때 마다 state에 저장
   * pointer div에 style={{width: {}, height: {}}} 주기
   */

  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleMouseMove = ({ nativeEvent }) => {
    console.log(nativeEvent.clientX, nativeEvent.clientY);
    setClientX(nativeEvent.clientX);
    setClientY(nativeEvent.clientY);
  };

  return (
    <div className='container' onPointerMove={(e) => handleMouseMove(e)}>
      <div
        className='pointer'
        style={{
          left: clientX,
          top: clientY,
        }}
      ></div>
    </div>
  );
}
