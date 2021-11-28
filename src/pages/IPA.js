import ipaTableSrc from 'assets/images/ipa/ipa-table.jpg';
import mouthShapeSrc from 'assets/images/ipa/mouth-shape.png';
import Consonants from 'components/IPA/Consonants';
import Diphthongs from 'components/IPA/Diphthongs';
import Vowels from 'components/IPA/Vowels';
import useTitle from 'hooks/useTitle';
import React from 'react';

function IPAPage() {
  useTitle('IPA');

  return (
    <div className="container dyno-box">
      <Vowels />
      <Diphthongs />
      <Consonants />

      {/* summary */}
      <h2 className="dyno-title">4. Summary</h2>

      <img src={ipaTableSrc} alt="IPA Table" className="w-100 mb-4" />
      <div
        className="w-100 my-10 t-center"
        style={{ maxWidth: 450, margin: 'auto' }}>
        <img src={mouthShapeSrc} alt="Mouth shape" className="w-100 mb-4" />
      </div>
    </div>
  );
}

export default IPAPage;
