import React, { useEffect, useState } from 'react';

/**
 * component가 처음 mount되었을 때(처음 보였을 때) 처리해야 되는 일이 있다면 component안에서 했을 경우 무한 루프에 빠지니까 useEffect 안에서 해주면 된다.
 * 딱 1번만 처리해야 될 경우 디펜던시 배열을 비워주면 된다.
 */

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((checked) => !checked);

  useEffect(() => {
    fetch(`/data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('네트워크에서 데이터를 받아옴');
        setProducts(data);
      });

    return () => {
      console.log('🧹🧹🧹🧹🧹🧹🧹');
    };
  }, [checked]);

  return (
    <>
      <input
        type='checkbox'
        id='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
