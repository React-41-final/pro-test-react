import { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router";
import Layout from "../layout/Layout";
import { refreshToken } from "../../redux/operations/authOperations";
import routers from "../../routers/routers";
import "./App.scss";
import { useDispatch } from "react-redux";
import Loader from "../loader/Loader";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, []);

  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route
                path={routers.mainPage}
                exact
                component={lazy(() => import("../pages/mainPage/MainPage"))}
              />
              <Route
                path={routers.authPage}
                exact
                component={lazy(() => import("../pages/authPage/AuthPage"))}
              />
              <Route
                path={routers.contactsPage}
                exact
                component={lazy(() =>
                  import("../pages/contactsPage/ContactsPage ")
                )}
              />
              <Route
                path={routers.test}
                exact
                component={lazy(() => import("../pages/test/Test"))}
              />
              <Route
                path={routers.results}
                exact
                component={lazy(() => import("../pages/results/Results"))}
              />
              <Route
                path={routers.usefulInfo}
                exact
                component={lazy(() => import("../pages/UsefulInfo/UsefulInfo"))}
              />
            </Switch>
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
