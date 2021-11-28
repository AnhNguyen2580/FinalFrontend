export const COLOR_VAR_KEYS = [
  { key: '--primary-color', label: 'Primary' },
  { key: '--secondary-color', label: 'Secondary' },
  { key: '--accent-color', label: 'Accent' },
  { key: '--bg-color-main', label: 'Background primary' },
  { key: '--bg-color-sec', label: 'Background secondary' },
  { key: '--bg-color-accent', label: 'Background accent' },
  { key: '--hover-color', label: 'Hover color' },
  { key: '--title-color', label: 'Title' },
  { key: '--text-color', label: 'Text' },
  { key: '--phonetic-color', label: 'Phonetic' },
];

export const COINS = {
  CORRECT_GAME_PER_QUES: 10,
};

export const DEFAULTS = {
  VOICE_URI: 'Google US English',
  VOICE_SPEED: 1,
  VOICE_VOLUME: 1,
  IMAGE_SRC:
    'https://res.cloudinary.com/dynonary/image/upload/v1625136714/dynonary/default-image.png',
};
export const MAX = {
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  USERNAME_LEN: 110,
  SEARCH_LEN: 50,
  WORD_LEN: 50,
  PHONETIC_LEN: 50,
  MEAN_WORD_LEN: 100,
  EXAMPLE_WORD_LEN: 250,
  SYNONYMS_WORD_LEN: 100,
  NOTE_WORD_LEN: 100,
  IMG_SIZE: 2, // 2 MB
  SENTENCE_LEN: 200,
  SENTENCE_MEAN_LEN: 300,
  SENTENCE_NOTE_LEN: 100,
  USER_COIN: 99999,
  VERIFY_CODE: 6,
};

export const MIN = {
  PASSWORD_LEN: 6,
};

export const ROUTES = {
  HOME: '/',
  IPA: '/IPA',
  CONTRIBUTION: '/contribution',
  DYNO_DICTIONARY: '/dyno-dictionary',
  COMMUNICATION_PHRASE: '/1000-communication-phrase',
  IRREGULAR: '/irregular-verbs',
};

export const REGEX = {
  NAME: /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,
};

export const THEME_KEYS = {
  ROOT_KEY: 'data-theme',
  LS_KEY: 'theme',
  PALETTE_KEY: 'palettes',
  CUSTOM: 'custom',
};

export const UX = {
  DELAY_TIME: 1500,
  DELAY_ANSWER: 3000,
};

export const VOICE_KEYS = {
  LS_KEY: 'voice',
};

export const WORD_TYPES = [
  {
    value: 'n',
    label: 'Noun',
  },
  {
    value: 'adj',
    label: 'Adjective',
  },
  {
    value: 'adv',
    label: 'Adverb',
  },
  {
    value: 'v',
    label: 'Verb',
  },
  {
    value: 'pro',
    label: 'Pronoun',
  },
  {
    value: 'con',
    label: 'Conjunction',
  },
  {
    value: 'pre',
    label: 'Preposition',
  },
  {
    value: 'det',
    label: 'Determiners',
  },
];

export const WORD_LEVELS = [
  {
    value: '0',
    label: 'None',
  },
  {
    value: 'A1',
    label: 'A1',
  },
  {
    value: 'A2',
    label: 'A2',
  },
  {
    value: 'B1',
    label: 'B1',
  },
  {
    value: 'B2',
    label: 'B2',
  },
  {
    value: 'C1',
    label: 'C1',
  },
  {
    value: 'C2',
    label: 'C2',
  },
];

export const WORD_SPECIALTY = [
  { value: '0', label: 'None' },
  { value: '1', label: 'Biotechnology' },
  { value: '6', label: 'Information Technology' },
  { value: '14', label: 'Food Technology' },
  { value: '20', label: 'Entertainment' },
  { value: '3', label: 'Economics' },
  { value: '2', label: 'Accounting' },
  { value: '8', label: 'Chemical Engineering' },
  { value: '19', label: 'Fine Arts Industry' },
  { value: '12', label: 'Marketing' },
  { value: '18', label: 'Hotel Management' },
  { value: '7', label: 'Business Adminstration' },
  { value: '5', label: 'Human Resource Management' },
  { value: '13', label: 'Design UI/UX' },
  { value: '4', label: 'International Trade' },
  { value: '10', label: 'E-Commerce' },
  { value: '9', label: 'Business English' },
  { value: '11', label: 'Finance & Banking' },
  { value: '16', label: 'Culturology' },
  { value: '17', label: 'Construction Industry' },
  { value: '15', label: 'Sociology' },
];