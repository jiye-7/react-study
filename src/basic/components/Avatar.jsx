import React from 'react';

export default function Avatar({ image, isNewEmployee }) {
  return (
    <div className='avatar'>
      <img className='photo' src={image} alt='profile' />
      {isNewEmployee && <span className='new-employee'>new</span>}
    </div>
  );
}
