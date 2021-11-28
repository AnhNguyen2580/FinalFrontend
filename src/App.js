import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from 'components/Navigation';
import SpeedDials from 'components/SpeedDial';
import GlobalLoading from 'components/UI/GlobalLoading';
import Message from 'components/UI/Message';
import routerConfig from 'configs/routerConfig';
import theme from 'configs/theme';
import useTheme from 'hooks/useTheme';
import useVoice from 'hooks/useVoice';
import NotFoundPage from 'pages/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Element } from 'react-scroll';

const { routes, renderRoutes } = routerConfig;

function App() {
  // get and set theme
  useTheme();

  // get window voice and set custom voice
  useVoice();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="Cosmos-app">
            <Element name="scrollTop" />
            <Navigation />

            {/* routes */}
            <Suspense fallback={<GlobalLoading />}>
              <Switch>
                {renderRoutes(routes, true)}
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Suspense>

            {/* common component */}
            <div id="_overlay"></div>
            <Message />
            <SpeedDials />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
