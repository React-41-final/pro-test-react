import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "../layout/Layout";
import { refreshToken } from "../../redux/operations/authOperations";
import routers from "../../routers/routers";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    dispatch(refreshToken());
  }, []);
  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<Loader />}>
            {/* <Switch> */}
            {isAuth ? (
              <Switch>
                <Route
                  path={routers.mainPage}
                  exact
                  component={lazy(() => import("../pages/mainPage/MainPage"))}
                />
                {/* <Route
                  path={routers.authPage}
                  exact
                  component={lazy(() => import("../pages/authPage/AuthPage"))}
                /> */}
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
                  component={lazy(() =>
                    import("../pages/UsefulInfo/UsefulInfo")
                  )}
                />
              </Switch>
            ) : (
              <Switch>
                {/* <Route
                  path={routers.mainPage}
                  exact
                  component={lazy(() => import("../pages/mainPage/MainPage"))}
                /> */}
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
                <Redirect to="/auth" />
              </Switch>
            )}
            {/* </Switch> */}
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
