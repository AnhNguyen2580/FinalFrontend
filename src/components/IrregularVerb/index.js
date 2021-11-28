
import AutoSearchInput from 'components/UI/AutoSearchInput';
import Speaker from 'components/UI/Speaker';
import initList from 'constant/irregular-verb.min.js';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';

function IrregularVerbFilter({ classes, onSort, onFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortType, setSortType] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="d-flex ml-8">
    </div>
  );
}

IrregularVerbFilter.propTypes = {
  classes: PropTypes.object,
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
};

function IrregularVerb() {
  const classes = useStyle();
  const [list, setList] = useState([...initList]);

  const handleSort = (sortType = true) => {
    let newList = [];
    if (sortType) {
      newList = list.sort((a, b) => (a.v1 > b.v1 ? 1 : a.v1 < b.v1 ? -1 : 0));
    } else {
      newList = list.sort((a, b) => (a.v1 > b.v1 ? -1 : a.v1 < b.v1 ? 1 : 0));
    }
    setList([...newList]);
  };

  const handleSearch = (word) => {
    const foundList = initList.filter((item) => {
      const chainStr = `${item.v1} $${item.v2} ${item.v3} ${item.mean}`;
      return chainStr.toLowerCase().indexOf(word.toLowerCase()) !== -1;
    });

    setList([...foundList]);
  };

  const handleFilter = (type) => {
    const newList = filterIrregularList(initList, type);
    setList([...newList]);
  };

  return (
    <div className={`${classes.root} container`}>
      {/* header */}
      <h1 className="dyno-title">Irregular Verb</h1>
      <p className="dyno-sub-title">
        The list of 360 irregular verbs that usually use in daily conversation. <br /> we focus on some words first 😎 (Click on word to listening)
      </p>
      <div className="dyno-break"></div>

      {/* search, filter */}
      <div className="flex-center-between">
        <AutoSearchInput
          onSearch={handleSearch}
          maxLength={40}
          style={{ padding: '1rem 1.2rem', maxWidth: '45rem' }}
        />
        <IrregularVerbFilter
          classes={classes}
          onSort={handleSort}
          onFilter={handleFilter}
        />
      </div>

      {/* verb table */}
      <div className={classes.tableWrap}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.tableHeader}>
              <th>Infinitive (V1)</th>
              <th>Simple Past (V2)</th>
              <th>Past Participle (V3)</th>
              <th>Mean</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => {
              const { v1, v2, v3, mean } = item;
              return (
                <tr key={index}>
                  <td>
                    <Speaker isWrap={true} text={v1}>
                      {v1}
                    </Speaker>
                  </td>
                  <td>
                    <Speaker isWrap={true} text={v2}>
                      {v2}
                    </Speaker>
                  </td>
                  <td>
                    <Speaker isWrap={true} text={v3}>
                      {v3}
                    </Speaker>
                  </td>
                  <td>{mean}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IrregularVerb;
