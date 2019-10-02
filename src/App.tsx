import React from 'react';
import { Router, Link, RouteComponentProps, Location } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'

import './App.css';

// StoreProvider 
import { StoreProvider } from './store/'

// Helper for Lazy Route Component problem
function createLazyRoute<T extends RouteComponentProps>(RouteComponent: React.ComponentType<T>) {
  return function (props: T) {
    return (
      <React.Suspense fallback={<h5>Loading...</h5>}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}

// Pages
const Home = createLazyRoute(
  React.lazy(() => import('./pages/Home'))
);
const Favorites = createLazyRoute(
  React.lazy(() => import('./pages/Favorites'))
);

function App(): JSX.Element {
  return (
    <StoreProvider>
      <div className="pages">
        <Location>
          {({ location }) => (
            <React.Fragment>
              <Router>
                <Home path={`${location.pathname}/`} />
                <Favorites path={`${location.pathname}/favorites`} />
              </Router>
            </React.Fragment>
          )}
        </Location>
      </div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <div>Home</div>
          </Link>
        </div>
        <div>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} />
            <div>Favorites</div>
          </Link>
        </div>
      </nav>
    </StoreProvider>
  );
}

export default App;
