const personReducer = (person, action) => {
  switch (action.type) {
    case 'updated': {
      const { prevName, current } = action; // action.prev, action.current를 prev, current에 할당(object deconstructing, 구조 분해 할당)
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prevName) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입입니. ${action.type}`);
    }
  }
};

export default personReducer;
