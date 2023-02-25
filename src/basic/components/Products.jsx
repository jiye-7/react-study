import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleChange = () => setChecked((checked) => !checked);

  // loading, error state 추가
  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`/data/${checked ? 'sale_' : ''}products.json`)
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

    return () => {
      console.log('🧹🧹🧹🧹🧹🧹🧹');
    };
  }, [checked]);

  if (loading) return <h1>loading.....</h1>;
  if (error) return <h1>error.... :(</h1>;

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
