import React, { useState } from 'react';

/**
 * uncontrolled component 통제되지 않는 컴포넌트 => form 태그를 이용해서 작성하면 input들의 값이 화면상에서 업데이트되는데 컴포넌트 상태에서는 변경이 되지 않는다.
 * -> 리액트에서 컨트롤 하는 컴포넌트를 만들 수 있다.
 */

export default function AppForm() {
  // 입력 form은 data가 보여지고 있는 것이 리액트 컴포넌트에서 가지고 있는 상태와 똑같이 매칭 되도록 타이밍을 맞게해주는 것이 중요하다. -> 사용자가 입력한 것이 component상에서도 매칭되도록 만들어줘야 한다.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름: </label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email'>이메일: </label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
