import React from 'react';
import ReturnResult from './components/modul-3-session-2/module-3-handson-2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchBar from './components/modul-3-session-2/search/SearchBar';
import Trending from './components/Trending';


// export default function GiFViewer() {
//   return (
//     <div>
//       <ReturnResult />
//     </div>
//   )
// }

export default function GiFViewer() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Trending</Link>
          </li>
          <li>
            <Link to="/topics">SearchBar</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <Trending />
          </Route>
          <Route path="/topics">
            <SearchBar />
          </Route>
          <Route path="/">
            <ReturnResult />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
