import { CONSONANTS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Consonants() {
  return (
    <>
      <h2 className="dyno-title">3. Consonants</h2>


      {CONSONANTS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
          isNoVoice={true}
        />
      ))}
    </>
  );
}

export default Consonants;
