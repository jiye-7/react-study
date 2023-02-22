import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

/**
 * 리액트는 새로운 참조값이 만들어져야 무언가가 업데이트 된 것을 알 수 있다. 그래서 똑같은 객체(즉, 참조값이 동일한 상태)에서 내용을 아무리 수정해봤자 동일한 객체로 간주해서
 * 업데이트해 주지 않는다. -> 업데이트를 하려면 전체적인 객체를 새롭게 만들어서 새로운 참조값을 만들 수 있게 해줘야 된다.
 * -> 리액트에서 사용하는 모든 state는 불변성을 가져야 한다. 리액트에서 사용하는 상태의 객체, 배열의 내부 내용을 직접적으로 업데이트하면 안 되고, 변경이 발생한다면 전체적인 껍데기를 새로
 * 만들어서 업데이트 해줘야 한다.
 */
/**
 * useReducer를 사용해서 객체를 변경하는 로직을 분리, 컴포넌트에서는 dispatch({액션 객체를 담아서}) 이용해서 명령만 담당한다.
 * -> 로직의 재사용성을 높임
 */
export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  /**
   * const [상태에 접근할 수 있는 변수, 리듀서를 호출할 수 있는 디스패치] = useReducer(객체를 새롭게 만드는 로직을 작성한 함수(특정 리듀서), 초기값)
   *  */
  const [person, dispatch] = useReducer(personReducer, initialPerson); // reducer, initial value 지정

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
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
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
