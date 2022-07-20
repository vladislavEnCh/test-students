import React, { useEffect, useState } from 'react';
import Additional from '../Additional/Additional';
import { useDispatch, useSelector } from 'react-redux';
import rect from './../../assets/Vector.svg';
import info from './../../assets/info.png';
import pan from './../../assets/pan.png';
import evolveArrow from './../../assets/evolveArrow.png';
import './Row.scss';
import classNames from 'classnames';
import { addStudents, removeStudents } from '../../store/actions/students';

function Row({ item, clearChild, setClearChild }) {
  const { totalStudents } = useSelector((state) => state.students);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  let btnClass = classNames({
    red: +item.score[0] + item.score[1] < 50,
    blue: +item.score[0] + item.score[1] > 89,
    green:
      +item.score[0] + item.score[1] < 90 &&
      +item.score[0] + item.score[1] > 80,
    yellow:
      +item.score[0] + item.score[1] < 80 &&
      +item.score[0] + item.score[1] > 51,
  });
  let speedClass = classNames({
    red: 'Below Expected' === item.speed,
    blue: 'Above Expected' === item.speed,
    green: 'As Expected' === item.speed,
  });
  useEffect(() => {
    checkHandler(isChecked);
  }, [isChecked]);
  useEffect(() => {
    if (clearChild) {
      setIsChecked(false);
      setClearChild(false);
    }
  }, [clearChild, setClearChild]);

  const checkHandler = (chek) => {
    if (chek) {
      dispatch(addStudents(item));
    } else {
      dispatch(removeStudents(item.id));
    }
  };
  const openHandler = (e) => {
    if (e.target.type === 'checkbox') {
      setIsChecked(!isChecked);
    } else {
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <tr
        onClick={(e) => {
          openHandler(e);
        }}
        className="row">
        <td className="row_name">
          <input readOnly checked={isChecked} type="checkbox" />
          <span className="row_name_name">{item.name}</span>
        </td>
        <td className="row_id">{item.id}</td>
        <td className="row_class">{item.class}</td>
        <td className={btnClass}>{item.score}</td>
        <td className={speedClass}>{item.speed}</td>
        <td className="row_parents">
          <div>
            {' '}
            <img className="icon_margin_right" src={info} alt="" />
            {item.parents[0]}, {item.parents[1]}
          </div>

          <div className="row_span">
            {' '}
            {!!totalStudents && (
              <div className="row_box">
                <div className="row_box_item">
                  <img className="" src={pan} alt="" />
                </div>
                <div className="row_box_item">
                  <img className="" src={evolveArrow} alt="" />
                </div>
              </div>
            )}
            <img
              className={!isOpen ? 'table_parents open' : 'table_parents'}
              src={rect}
              alt=""
            />
          </div>
        </td>
      </tr>

      {isOpen && <Additional item={item} />}
    </>
  );
}

export default Row;
