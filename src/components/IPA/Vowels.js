import { VOWELS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Vowels() {
  return (
    <>
      <h2 className="dyno-title">1. Vowels</h2>

      {VOWELS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
        />
      ))}
    </>
  );
}

export default Vowels;
