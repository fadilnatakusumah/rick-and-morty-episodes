import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { StoreProvider } from './store/'

// StoreProvider 

// Helper for Lazy Route Component problem
// function createLazyRoute<T extends RouteComponentProps>(RouteComponent: React.ComponentType<T>) {
//   return function (props: T) {
//     return (
//       <React.Suspense fallback={<h5>Loading...</h5>}>
//         <RouteComponent {...props} />
//       </React.Suspense>
//     );
//   };
// }

// Pages
const Home = React.lazy(() => import('./pages/Home'))
const Favorites = React.lazy(() => import('./pages/Favorites'))

function App(): JSX.Element {
  return (
    <StoreProvider>
      <div className="pages">
        <React.Fragment>
          <Route exact path={'/'} render={() => (
            <React.Suspense fallback={<h4>Loading...</h4>}>
              <Home />
            </React.Suspense>
          )} />
          <Route path={'/favorites'} render={() => (
            <React.Suspense fallback={<h4>Loading...</h4>}>
              <Favorites />
            </React.Suspense>
          )} />
        </React.Fragment>
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
