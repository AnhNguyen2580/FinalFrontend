import CommunicationPhraseData from 'components/CommunicationPhrase/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CommunicationPhrasePage() {
  useTitle('1000+ Sentence of communication');

  return (
    <div className="container">
      <CommunicationPhraseData />
    </div>
  );
}

export default CommunicationPhrasePage;
