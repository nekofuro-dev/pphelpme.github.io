import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter, HashRouter, Route, Routes,
} from 'react-router-dom';

import App from './App';
import NotFoundPage from './pages/errorPages/NotFoundPage';
import HomePage from './pages/HomePage';
import SQLShowDifferentPage from './pages/SQLShowDifferentPage';
import './styles.css';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="sqlShowDifferent" element={<SQLShowDifferentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  </HashRouter>,
  mountNode,
);
