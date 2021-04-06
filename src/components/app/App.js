import Layout from '../layout/Layout';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <div className='App'>
          <h2>main</h2>
          {/* <Suspense fallback={<Loader />}>
            <Switch>
              <Route
                path={mainRoutes.home}
                exact
                component={lazy(() => import('./home/Home'))}
              />
              <Route
                path={mainRoutes.movies}
                exact
                component={lazy(() => import('./movievs/Movievs'))}
              />
              <Route
                path={mainRoutes.moviesDetails}
                component={lazy(() =>
                  import('./movieDetailsPage/MovieDetailsPage.js')
                )}
              />
            </Switch>
          </Suspense> */}
        </div>
      </Layout>
    </div>
  );
}

export default App;
