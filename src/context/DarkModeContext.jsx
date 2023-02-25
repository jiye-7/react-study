import React, { createContext, useState } from 'react';

/**
 * createContext를 이용해서 context를 만들고, provider를 만들어줘야 한다.
 */
// data를 context에 담고있고, provider는 data를 담고 있는 컴포넌트이다. (자식 컴포넌트들을 감싸줄 수 있는 부모 컴포넌트)
export const DarkModeContext = createContext();

// {children}: 외부로부터 받아온 자식
// 외부에서 어떤 컨텐츠를 넣고 싶은지? 외부에서 컴포넌트들을 받을수 있는 컴포넌트
// UI적으로 무언갈 하진 않지만, children을 감싸는 data를 가지고 있는 지붕역할을 한다.
export function DarkModeProvider({ children }) {
  /**
   * global하게 기억하고 싶은 data, 그 data를 처리할 때 사용하는 함수들을 이 안에서 만들어주면 된다.
   */
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
