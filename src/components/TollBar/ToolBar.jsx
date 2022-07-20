import React from 'react';
import rect from './../../assets/Vector.svg';
import cancel from './../../assets/cancel.svg';
import './ToolBar.scss';

function ToolBar() {
  const items = [
    'show all',
    'All grades',
    'All classes',
    'Av.Score',
    'Av.Speed',
    'All Classes',
  ];
  return (
    <div className="toolbar">
      <div className="toolbar_menu">
        {items.map((item) => (
          <div key={item} className="toolbar_item">
            {item}
            <img className="icon_pading_left" src={rect} alt="" />
          </div>
        ))}
        <div className="toolbar_item">
          <img className="icon_margin_right" src={cancel} alt="" />
          clear all
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
