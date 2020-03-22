import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {PositionProvider} from './components/PositionContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <PositionProvider>
    <App />
  </PositionProvider>
, rootElement);