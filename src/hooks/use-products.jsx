import { useEffect, useState } from 'react';
/**
 * 같은 점
 * - custom hook은 컴포넌트와 마찬가지로 내부 useState, useEffect 등을 사용할 수 있다.
 *
 * 다른 점
 * - 일반 컴포넌트는 리액트에게 전달해줄 UI (JSX 사용)
 * - 커스텀 훅은 외부 사람들과 공유하고 싶은 데이터를 리턴한다.
 *
 * custom hook 주의사항
 * - Hooks는 (함수들은) 값의 재사용이 아니라 `로직의 재사용`을 위한 것이다.
 */
// 이 use Hook이 호출되면 처음으로 해당 state들을 사용해서 data를 초기화 한다.
// 처음으로 mount 될 때 해당 useEffect가 실행된다.
// 외부에서 checked 값이 변경 될 때 마다 네트워크 통신이 달라져야 하므로 외부로부터 prop을 주입받는것처럼 데이터를 주입받을 수 있다.
export default function useProducts({ salesOnly }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`/data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('네트워크에서 데이터를 받아옴');
        setProducts(data);
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [salesOnly]);
  // UI 컴포넌트는 UI를 반환하는 반면에 custom hook은 원하는 데이터를 반환하면 된다.
  return [loading, error, products];
}
