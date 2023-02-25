import React from 'react';
/**
 * 자식요소를 감싸는 한 단계 높은 부모 컴포넌트를 만들면, 컴포넌트를 더 효율적으로 재사용 할 수 있다.
 */
export default function AppCard() {
  return (
    <div>
      <Card>
        <p>Card 1</p>
      </Card>
      <Card>
        <h1>Card 2</h1>
        <p>이 카드에 대해서 말하자면요...</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
