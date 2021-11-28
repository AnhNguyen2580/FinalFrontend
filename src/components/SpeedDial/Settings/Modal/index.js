import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeSetting from '../Theme';
import ToggleNavButton from '../ToggleNavButton';
import VoiceSetting from '../Voice';
import useStyle from './style';

function SettingModal({ open, onClose }) {
  const classes = useStyle();

  return (<Dialog>

    </Dialog>

  );
}

SettingModal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

SettingModal.defaultProps = {
  onClose: function () {},
  open: false,
};

export default SettingModal;
