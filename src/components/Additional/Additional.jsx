import React from 'react';
import './Additional.scss';
import rect from './../../assets/Vector.svg';

function Additional({ item }) {
  const handler = () => {};
  return (
    <div className="test">
      <div className="test_container">
        {/* ==========Info==================== */}
        <div className="test_info">
          <div className="test_info_name">
            <span>
              {' '}
              Student:{' '}
              <span className="test_info_name_selected">{item.name}</span>{' '}
            </span>
            <span>
              id: <span className="test_info_name_selected">{item.id}</span>{' '}
            </span>
          </div>
          <div className="test_sort">
            <div className="test_sort_button">
              All concepts
              <img src={rect} alt="" />
            </div>
            <div className="test_sort_button">
              All score
              <img src={rect} alt="" />
            </div>
            <div className="test_sort_button">
              All speed
              <img src={rect} alt="" />
            </div>
          </div>
        </div>
        {/* ================Table================= */}
        <div className="test_line"></div>
        <div className="test_score">
          {' '}
          <span className="test_score_blue">
            <span className="test_score_circle"></span> 90%+ accuracy
          </span>
          <span className="test_score_green">80 - 89% accuracy</span>
          <span className="test_score_yelow">50 - 79% accuracy</span>
          <span className="test_score_red">below 50% accuracy</span>
        </div>
        <div className="test_speed">
          <span className="test_speed_blue">above expected</span>
          <span className="test_speed_green">as expected</span>
          <span className="test_speed_red">below expected</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Test Label</th>
              <th>Score</th>
              <th>Speed</th>
              <th>Total Q-ns</th>
              <th>Exp. Speed</th>
              <th>Concept</th>
              <th>Date</th>
              <th>Absent</th>
            </tr>
          </thead>

          <tbody>
            {item.tests?.map((test, idx) => (
              <tr key={idx} className="tr">
                <td>{idx + 1}.</td>
                <td>{test.label}</td>
                <td>{test.score}</td>
                <td>{test.speed}</td>
                <td>{test.total}</td>
                <td>{test.expSpeed}</td>
                <td>{test.concept}</td>
                <td>{test.date}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={handler}
                    checked={test.absent}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Additional;
