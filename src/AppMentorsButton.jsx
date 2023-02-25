import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({ type: 'updated', prevName, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`새롭게 추가할 멘토의 이름은?`);
    const title = prompt(`어떤 직급인가요?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`삭제할 멘토의 이름은?`);
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='삭제하기' onClick={handleDelete} />
      <Button text='멘토 추가하기' onClick={handleAdd}></Button>
    </div>
  );
}

// 값이 전달될 때 매번 새로운 객체가 만들어지더라도 값을 비교해서 실제 전달된 값이 변경되지 않아서 값 자체는 동일한 값이라면 리렌더링 하지 않게하기 위해 memo로 감싸준다.
// AppMentorsButton 컴포넌트가 아무리 변경되어도 각각의 callback 함수를 useCallback으로 감싸주었고, 버튼 컴포넌트 자체에 text, prop의 값이 변경되지 않는이상 동일한 컴포넌트를 기억하고 있기 때문에 리렌더링이 되지 않음.
// 정리) useMemo, useCallback, memo 컴포넌트르 이용해서 실제 props, state의 값이 변경되지 않는 이상, dependency가 변경되지 않는 이상 re-rendering을 방지할 수 있다.
const Button = memo(({ text, onClick }) => {
  console.log(`Button ${text} re-rendering 🤔`);

  const result = useMemo(() => calculateSomething(), []);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'gray',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
        padding: '0.4rem 0.7rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 1000; i++) {
    console.log('😵');
  }
  return 1000000;
}

const initialPerson = {
  name: 'tori',
  title: '개발자',
  mentors: [
    {
      name: 'Bob',
      title: 'senior developer',
      id: 1,
    },
    {
      name: 'James',
      title: 'senior developer',
      id: 2,
    },
  ],
};
