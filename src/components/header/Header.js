import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import UserInfo from '../userInfo/UserInfo';

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Logo />
      <Navigation />
      <UserInfo />
    </div>
  );
};

export default Header;
