import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import Additional from '../../components/Additional/Additional';
import Row from '../../components/Row/Row';
import searchIcon from './../../assets/search.svg';
import arrow from './../../assets/arrow.svg';
import uparrow from './../../assets/up-arrow.svg';
import whiteCancel from './../../assets/whiteCancel.svg';
import whiteExport from './../../assets/whiteExport.svg';
import archive from './../../assets/archive.svg';

import download from './../../assets/download.svg';
import { getData } from '../../http/API';
import { CSVLink } from 'react-csv';
import './Students.scss';
import { useDispatch } from 'react-redux';
// import { addStudents } from '../../store/actions/students';
import { useSelector } from 'react-redux';
import { clearAll } from '../../store/actions/students';

function Students() {
  const [items, setItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [selecterStudents, setSelecterStudents] = useState();
  const [clearChild, setClearChild] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.students);

  useEffect(() => {
    getData(page, selectedOption, search, sort).then((data) => {
      setItems(data.data);
    });
  }, [selectedOption, page, search, sort]);
  useEffect(() => {
    setSelecterStudents(data);
  }, [data]);

  const cancelSelectHandler = () => {
    dispatch(clearAll());
    setClearChild(true);
  };

  const selectHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const nameHandler = () => {
    setSort('name');
  };
  const classHandler = () => {
    setSort('class');
  };
  const scoreHandler = () => {
    setSort('score');
  };
  const speedHandler = () => {
    setSort('speed');
  };
  const paginationPlusHandler = () => {
    setPage(page + 1);
  };
  const paginationMinusHandler = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="students">
      <div>
        {/* ============Navbar================== */}
        {!selecterStudents?.totalStudents ? (
          <div className="students_navbar">
            <div className="students_tittle">STUDENTS</div>
            <div className="students_search">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="students_search_input"
                type="search"
                placeholder="Enter Student Name, Parent or ID here"
              />
              <img
                className="icon_margin_right"
                src={searchIcon}
                alt=""
                width={'12px'}
              />
            </div>

            <div className="students_export">
              <CSVLink className="students_export" data={items}>
                <img className="icon_margin_right" src={download} alt="" />
                EXPORT CSV
              </CSVLink>
            </div>
          </div>
        ) : (
          <div className="students_selected">
            <div className="students_selected_tittle">
              {selecterStudents?.totalStudents} Student selected
            </div>

            <div className="students_selected_items">
              <div
                onClick={cancelSelectHandler}
                className="students_selected_cancel">
                <img className="icon_margin_right" src={whiteCancel} alt="" />
                cancel selection
              </div>
              <CSVLink className="students_selected_export" data={items}>
                <img className="icon_margin_right" src={whiteExport} alt="" />
                EXPORT CSV
              </CSVLink>
              <div className="students_selected_archive">
                <img className="icon_margin_right" src={archive} alt="" />
                archive selected
              </div>
            </div>
          </div>
        )}

        {/* ==============Main================ */}
        <div>
          <table>
            <thead>
              <tr>
                <th
                  className="students_cursor table_name"
                  onClick={nameHandler}>
                  Name
                </th>
                <th className="table_id">
                  ID <img className="table_uparrow" src={uparrow} alt="" />
                </th>
                <th
                  className="students_cursor table_class"
                  onClick={classHandler}>
                  Class
                </th>
                <th
                  className="students_cursor table_score"
                  onClick={scoreHandler}>
                  Av.Score %
                  <img className="table_uparrow" src={uparrow} alt="" />
                </th>
                <th
                  className="students_cursor table_speed"
                  onClick={speedHandler}>
                  Av.Speed
                  <img className="table_uparrow" src={uparrow} alt="" />
                </th>
                <th className="table_parents">Parents</th>
              </tr>
            </thead>

            <tbody>
              {items?.map((item, idx) => (
                <Row
                  key={idx}
                  item={item}
                  clearChild={clearChild}
                  setClearChild={setClearChild}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
        <span>
          Rows per page:{' '}
          <select
            defaultValue="10"
            onChange={(e) => selectHandler(e)}
            name="select "
            className=" custom-select">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </span>
        <span>
          {page * selectedOption + 1 - selectedOption}-{page * selectedOption}of
          20{' '}
          <img
            onClick={paginationMinusHandler}
            className="pagination_arrow"
            src={arrow}
            alt=""
          />{' '}
          <img onClick={paginationPlusHandler} src={arrow} alt="" />{' '}
        </span>
      </div>
    </div>
  );
}

export default Students;
