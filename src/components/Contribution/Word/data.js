import wordApi from 'apis/wordApi';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import WordContribution from './index';

const analysisExample = (exampleStr = '', word = '') => {
  if (typeof exampleStr !== 'string' || exampleStr === '') {
    return [];
  }

  const exampleArr = exampleStr.split('\n');
  for (let str of exampleArr) {
    if (str.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) === -1) {
      return false;
    }
  }

  return exampleArr;
};

function WordContributionData() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      setSubmitting(true);
      const { examples, synonyms, antonyms, word, phonetic, ...rest } = data;

      // check examples validation
      const exampleArr = analysisExample(examples, word);
      if (typeof exampleArr === 'boolean' && !exampleArr) {
        dispatch(
          setMessage({
            type: 'warning',
            message: 'Sentence of example include the new words.',
          }),
        );
        setSubmitting(false);
        return;
      }

      // split synonyms string to an array synonyms
      const synonymArr = synonyms !== '' ? synonyms.split('\n') : [];

      // split antonyms string to an array synonyms
      const antonymArr = antonyms !== '' ? antonyms.split('\n') : [];

      // call API
      const dataSend = {
        ...rest,
        examples: exampleArr,
        synonyms: synonymArr,
        antonyms: antonymArr,
        word,
        phonetic: phonetic.replaceAll('/', ''),
      };

      const apiRes = await wordApi.postContributeWord(dataSend);

      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message:
              'Addition successfully, Waiting process . Thank for your contribution'
          }),
        );
        setSubmitting(false);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Addition error ,please try again';
      dispatch(
        setMessage({
          type: 'error',
          message,
        }),
      );
      setSubmitting(false);
    }
  };

  return (
    <WordContribution onSubmitForm={handleSubmit} submitting={submitting} />
  );
}

export default WordContributionData;
