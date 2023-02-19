import React, { useEffect, useState } from 'react';

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
