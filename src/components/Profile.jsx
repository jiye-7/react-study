import React from 'react';
import ProfileImg from '../images/profile-img.png';

export default function Profile() {
  return (
    <div className='profile'>
      <img className='photo' src={ProfileImg} alt='test' />
      <h1>James Kim</h1>
      <p>Front Developer</p>
    </div>
  );
}
