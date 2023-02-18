import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

import ProfileImg1 from './images/profile-img1.png';
import ProfileImg2 from './images/profile-img2.png';
import ProfileImg3 from './images/profile-img3.png';

function AppProfile() {
  return (
    <>
      <Avatar image={ProfileImg1} isNewEmployee={true} />
      <Profile
        image={ProfileImg1}
        name='James Kim'
        title='FrontEnd Developer'
        isNewEmployee={true}
      />
      <Profile
        image={ProfileImg2}
        name='Stela Young'
        title='UI/UX Designer'
        isNewEmployee={true}
      />
      <Profile
        image={ProfileImg3}
        name='Tori Yu'
        title='BackEnd Developer'
        isNewEmployee={false}
      />
    </>
  );
}

export default AppProfile;
