import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Layout from '../layout/Layout';
import routers from '../../routers/routers';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <div className='App'>
          <Suspense fallback={<h2>...Loading</h2>}>
            <Switch>
              <Route
                path={routers.mainPage}
                exact
                component={lazy(() => import('../pages/mainPage/MainPage'))}
              />
              <Route
                path={routers.authPage}
                exact
                component={lazy(() => import('../pages/authPage/AuthPage'))}
              />
              <Route
                path={routers.contactsPage}
                exact
                component={lazy(() =>
                  import('../pages/contactsPage/ContactsPage ')
                )}
              />
              <Route
                path={routers.test}
                exact
                component={lazy(() => import('../pages/test/Test'))}
              />
              <Route
                path={routers.results}
                exact
                component={lazy(() => import('../pages/results/Results'))}
              />
              <Route
                path={routers.usefulInfo}
                exact
                component={lazy(() => import('../pages/UsefulInfo/UsefulInfo'))}
              />
            </Switch>
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
