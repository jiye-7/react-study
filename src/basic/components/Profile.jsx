import React from 'react';
import Avatar from './Avatar';

export default function Profile({ name, title, image, isNewEmployee }) {
  return (
    <div className='profile'>
      {isNewEmployee && <Avatar image={image} isNewEmployee={isNewEmployee} />}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
