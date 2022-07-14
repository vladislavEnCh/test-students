import React, { useEffect, useState } from 'react';
import Additional from '../Additional/Additional';
import { useDispatch } from 'react-redux';
import rect from './../../assets/Vector.svg';
import './Row.scss';
import classNames from 'classnames';
import { addStudents, removeStudents } from '../../store/actions/students';

function Row({ item, clearChild, setClearChild }) {
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
    // console.log(e.target.type === "checkbox");
  };
  return (
    <>
      <tr
        onClick={(e) => {
          openHandler(e);
        }}
        className="row">
        <td className="row_name">
          <input
            // onChange={() => {
            //   setIsChecked(!isChecked);
            // }}
            readOnly
            checked={isChecked}
            type="checkbox"
          />
          <span className="row_name_name">{item.name}</span>
        </td>
        <td className="row_id">{item.id}</td>
        <td className="row_class">{item.class}</td>
        <td className={btnClass}>{item.score}</td>
        <td className={speedClass}>{item.speed}</td>
        <td>
          {item.parents}{' '}
          <span>
            {' '}
            <img
              className={!isOpen ? 'table_parents open' : 'table_parents'}
              src={rect}
              alt=""
            />
          </span>
        </td>
      </tr>
      {/* <Additional /> */}
      {isOpen && <Additional item={item} />}
    </>
  );
}

export default Row;
