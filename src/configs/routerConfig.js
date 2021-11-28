import { ROUTES } from 'constant';
import HomePage from 'pages/Home';
import React from 'react';
import { Route } from 'react-router';
const IPAPage = React.lazy(() => import('pages/IPA'));
const ContributionPage = React.lazy(() => import('pages/Contribution'));
const DynoDictionaryPage = React.lazy(() => import('pages/DynoDictionary'));
const CommunicationPhrasePage = React.lazy(() =>
  import('pages/CommunicationPhrase'),
);
//const GrammarPage = React.lazy(() => import('pages/Grammar'));
const IrregularVerbPage = React.lazy(() => import('pages/IrregularVerb'));

// routes for app
const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    isProtect: false,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.IPA,
    exact: true,
    isProtect: false,
    component: () => <IPAPage />,
  },
  {
    path: ROUTES.CONTRIBUTION,
    exact: true,
    isProtect: false,
    component: () => <ContributionPage />,
  },
  {
    path: ROUTES.DYNO_DICTIONARY,
    exact: false,
    isProtect: false,
    component: () => <DynoDictionaryPage isTOEIC={false} />,
  },
  {
    path: ROUTES.COMMUNICATION_PHRASE,
    exact: true,
    isProtect: false,
    component: () => <CommunicationPhrasePage />,
  },
  {
    path: ROUTES.IRREGULAR,
    exact: false,
    isProtect: false,
    component: () => <IrregularVerbPage />,
  },
];

const renderRoutes = (routes, isAuth = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    const loginComponent = () => <>Login</>;
    const componentRender = !isProtect
      ? component
      : isAuth
      ? component
      : loginComponent;

    return (
      <Route
        path={path}
        exact={exact}
        key={index}
        component={componentRender}
      />
    );
  });
};

export default {
  routes,
  renderRoutes,
};
