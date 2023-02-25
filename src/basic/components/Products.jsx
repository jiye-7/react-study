import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((checked) => !checked);

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
