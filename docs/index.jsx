/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import Header from './sections/Header';
import Installation from './sections/Installation';
import Components from './sections/Components';
import Properties from './sections/Properties';
import Examples from './sections/Examples';
import Live from './sections/Live';

const Demo = () => (
  <div className="demo">
    { /*<Header />
        <Installation />
        <Components />
        <Properties />
        <Examples /> */ }
    <Live />
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('content'));