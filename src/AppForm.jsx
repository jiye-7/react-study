import React, { useState } from 'react';

/**
 * <form>에 있는 input data는 사용자가 바로 수정하고 눈으로 확인이 가능하기 때문에
 * uncontrolled component 통제되지 않는 컴포넌트라고 한다.
 *
 * 리액트에서 추구하는 원칙: 항상 UI update는 리액트의 props or state로부터 발생되어야 한다.
 * => form 태그를 이용해서 작성하면 input들의 값이 화면상에서 업데이트되는데 컴포넌트 상태에서는 변경이 되지 않는다.
 * -> 그래서 form을 사용할 때는 항상 상태를 이용해서 value는 그 해당 state값을 출력하고, onChange가 발생할 때 마다 상태를 업데이트 해 줘야 된다. 리액트에서 컨트롤 하는 컴포넌트를 만들 수 있다.
 */

export default function AppForm() {
  // 입력 form은 data가 보여지고 있는 것이 리액트 컴포넌트에서 가지고 있는 상태와 똑같이 매칭 되도록 타이밍을 맞게해주는 것이 중요하다. -> 사용자가 입력한 것이 component상에서도 매칭되도록 만들어줘야 한다.
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [form, setForm] = useState({ name: '', email: '' }); // 연관된 데이터라 객체로 상태 관리해줌

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  // 입력 form이 하나라도 변경되면 등록한 callback 함수를 호출
  const handleChange = (e) => {
    // 어떤 것이 변경되었는 지 정보를 받아옴
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름: </label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일: </label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
