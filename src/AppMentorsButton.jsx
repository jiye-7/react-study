import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({ type: 'updated', prevName, current });
  };

  const handleAdd = () => {
    const name = prompt(`새롭게 추가할 멘토의 이름은?`);
    const title = prompt(`어떤 직급인가요?`);
    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`삭제할 멘토의 이름은?`);
    dispatch({ type: 'deleted', name });
  };

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

function Button({ text, onClick }) {
  console.log(`Button ${text} re-rendering 🤔`);
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
      {text}
    </button>
  );
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
