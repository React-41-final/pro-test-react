import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Layout from "../layout/Layout";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<h2>...Loading</h2>}>
            <Switch>
              <Route
                path="/"
                exact
                component={lazy(() => import("../pages/mainPage/MainPage"))}
              />
              <Route
                path="/auth"
                exact
                component={lazy(() => import("../pages/authPage/AuthPage"))}
              />
              <Route
                path="/contacts"
                exact
                component={lazy(() =>
                  import("../pages/contactsPage/ContactsPage ")
                )}
              />
              <Route
                path="/test"
                exact
                component={lazy(() => import("../pages/test/Test"))}
              />
              <Route
                path="/results"
                exact
                component={lazy(() => import("../pages/results/Results"))}
              />
              <Route
                path="/usefull-info"
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
