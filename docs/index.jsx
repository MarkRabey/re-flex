/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Flex, Box } from 're-flex';

import Header from './sections/Header';
import Installation from './sections/Installation';
import Components from './sections/Components';
import Properties from './sections/Properties';
import Responsive from './sections/Responsive';
import Examples from './sections/Examples';

const Demo = () => (
  <div className="demo">
    <Header />
    <Installation />
    <Components />
    <Properties />
    <Responsive />
    <Examples />
    
  {/*    
    
    <Flex element="section" gutter={ 0.25 }>
      <Box element="article">
        <code>
          Flex > Box
        </code>
      </Box>
      <Box element="article">
        <code>
          Flex > Box
        </code>
      </Box>
    </Flex>
    
    
    
    
  */}
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('content'));