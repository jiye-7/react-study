import React from 'react';
import profileImg from './basic/images/profile-img3.png';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar image={profileImg} name='Sugan' size={200} />
        <p>리액트에서는 "children"이라는 이름의 prop으로 전달해 준다.</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellowgreen' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}'`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
