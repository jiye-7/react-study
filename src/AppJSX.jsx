import './App.css';

function AppJSX() {
  const name = 'tori';
  const list = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        src='https://images.unsplash.com/photo-1676376327236-cd743ef57c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        style={{ width: 200, height: '200px' }}
        alt='nature'
      />
    </>
  );
}

export default AppJSX;
