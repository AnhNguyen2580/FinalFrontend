import Grid from '@material-ui/core/Grid';
import communicateIcon from 'assets/icons/communicate.png';
import dictionaryIcon from 'assets/icons/dictionary.png';
import editIcon from 'assets/icons/edit.png';
import ipaIcon from 'assets/icons/ipa.png';
import verbIcon from 'assets/icons/verb.png';
import FeatureBox from 'components/FeatureBox';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'International Phonetic Alphabet (IPA)',
    subTitle:
      'Lets pronounce as an native speaker with Cosmos',
    imgUrl: ipaIcon,
    to: ROUTES.IPA,
  },
  {
    title: '1000+ sentences of communication',
    subTitle: 'Lets speak as an native speaker with Cosmos',
    imgUrl: communicateIcon,
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Cosmos Dictionary',
    subTitle: 'Lets learn vocabulary with Cosmos',
    imgUrl: dictionaryIcon,
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Irregular Verb',
    imgUrl: verbIcon,
    subTitle: 'Lets learn irregular verbs with Cosmos',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'Contribution',
    imgUrl: editIcon,
    subTitle:
      'Lets become an global citizen with Cosmos',
    to: ROUTES.CONTRIBUTION,
  },
];

function HomePage() {
  useTitle('Cosmos - English for everyone');
  useScrollTop();

  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
