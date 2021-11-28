import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import InputCustom from 'components/UI/InputCustom';
import TopicSelect from 'components/UI/TopicSelect';
import { MAX } from 'constant';
import { SENTENCE_TOPICS } from 'constant/sentence-topics';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InformationTooltip from '../Word/InformationTooltip';
import useStyle from '../Word/style';

const schema = yup.object().shape({
  sentence: yup
    .string()
    .trim()
    .required('Lets type your sentences')
    .lowercase()
    .max(MAX.SENTENCE_LEN, `Max length ${MAX.SENTENCE_LEN} characters`),
  mean: yup
    .string()
    .trim()
    .lowercase()
    .required('Lets type Vietnamese meaning of this word')
    .max(MAX.SENTENCE_MEAN_LEN, `Max length ${MAX.SENTENCE_MEAN_LEN} characters`),
  note: yup
    .string()
    .max(
      MAX.SENTENCE_NOTE_LEN,
      `Maximum note ${MAX.SENTENCE_NOTE_LEN} characters`,
    ),
});
const ButtonWrapper = (props) => <Grid {...props} item xs={12} />;

function SentenceContribution({ submitting, onSubmitForm }) {
  const classes = useStyle();
  const topics = useRef([]);
  const [resetFlag, setResetFlag] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onResetForm = () => {
    topics.current = [];
    setResetFlag(Math.random() + 1);
    reset({ sentence: '', mean: '', note: '' });
  };

  const handleSubmitForm = (formData) => {
    onSubmitForm({ ...formData, topics: topics.current });
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Lets type your conversation sentences</h1>
      <div className="dyno-break"></div>

      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
        <Grid className={classes.grid} container spacing={3}>
          {/* new sentence */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="An english sentence (*)"
              multiline
              error={Boolean(errors.sentence)}
              inputProps={{
                autoFocus: true,
                className: classes.sentenceInput,
                maxLength: MAX.SENTENCE_LEN,
                name: 'sentence',

                ...register('sentence'),
              }}
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.sentence && (
              <p className="text-error">{errors.sentence?.message}</p>
            )}
          </Grid>

          {/* mean sentence */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Vietnamese meaning of this sentence (*)"
              error={Boolean(errors.mean)}
              multiline
              inputProps={{
                maxLength: MAX.SENTENCE_MEAN_LEN,
                name: 'mean',
                className: classes.sentenceInput,
                ...register('mean'),
              }}
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.mean && (
              <p className="text-error">{errors.mean?.message}</p>
            )}
          </Grid>

          {/* sentence note */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Note (*)"
              error={Boolean(errors.note)}
              multiline
              inputProps={{
                className: classes.sentenceInput,
                maxLength: MAX.SENTENCE_NOTE_LEN,
                name: 'note',
                ...register('note'),
              }}
              endAdornment={
                <InformationTooltip title="Add more notes, ..." />
              }
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.note && (
              <p className="text-error">{errors.note?.message}</p>
            )}
          </Grid>

          {/* topics */}
          <TopicSelect
            buttonWrapper={ButtonWrapper}
            tagsWrapper={ButtonWrapper}
            topicList={SENTENCE_TOPICS}
            onChange={(v) => (topics.current = v)}
            resetFlag={resetFlag}
          />
        </Grid>

        <div className="dyno-break"></div>

        {/* button group */}
        <div className="d-flex flex-end jus-content-end pt-5 w-100">
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            color="secondary"
            endIcon={<ResetIcon />}
            variant="outlined"
            disabled={submitting}
            onClick={onResetForm}>
            Reset
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

SentenceContribution.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

export default SentenceContribution;
