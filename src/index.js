import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {PositionProvider} from './components/PositionContext';
import {ConditionsProvider} from './components/ConditionsContext';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <ConditionsProvider>
    <PositionProvider>
      <App />
    </PositionProvider>
  </ConditionsProvider>
, rootElement);