import { DIPHTHONGS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Diphthongs() {
  return (
    <>
      <h2 className="dyno-title">2. Diphthongs</h2>


      {DIPHTHONGS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
        />
      ))}
    </>
  );
}

export default Diphthongs;
