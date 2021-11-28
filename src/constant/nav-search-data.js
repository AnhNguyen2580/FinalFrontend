import { ROUTES } from 'constant';

const NAV_SEARCH_DATA = [
  {
    title: 'International Phonetic Alphabet (IPA)',
    searchKey:
      'Lets pronounce as an native speaker with Cosmos',
    to: ROUTES.IPA,
  },
  {
    title: '1000+ sentences of communication',
    searchKey:
      'Lets speak as an native speaker with Cosmos',
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Cosmos Dictionary',
    searchKey:
      'Lets learn vocabulary with Cosmos',
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Irregular Verb',
    searchKey: 'Lets learn irregular verbs with Cosmos',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'Contribution',
    searchKey: 'Lets become an global citizen with Cosmos',
    to: ROUTES.CONTRIBUTION,
  },
];

export default NAV_SEARCH_DATA;
