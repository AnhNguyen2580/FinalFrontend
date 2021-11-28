import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logoUrl from 'assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';

function Navigation() {
  const classes = useStyle();
  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <div className={`${classes.navWrapper} w-100vw`} id="dynoNav">
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center--ver">
          {/* Logo */}
          {isXsDevice && (
            <Link to="/">
              <img
                className={`${classes.imgSize} ${classes.logo}`}
                src={logoUrl}
                alt="Logo"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
