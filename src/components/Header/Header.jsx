import React from 'react';
import './Header.scss';
import profile from './../../assets/Ellipse 2.png';
import rect from './../../assets/Vector.svg';

function Header() {
  return (
    <div className="header">
      <div className="header_item header_school">
        <span className="icon_margin_right">School1</span>
        <img className="icon_margin_left" src={rect} alt="" />
      </div>
      <div className="header_menu">
        <div className="header_item">Analytics</div>
        <div className="header_item">gradebooks</div>
        <div className="header_item">Tests</div>
        <div className="header_item ">
          <span className="header_active">Students</span>
        </div>
        <div className="header_item">Teachers</div>
        <div className="header_item">archive</div>
      </div>
      <div className="header_profile">
        <img className="icon_margin_right" src={profile} alt="" />
        <img src={rect} alt="" />
      </div>
    </div>
  );
}

export default Header;
