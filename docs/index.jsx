/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Flex, Box } from 're-flex';

// import Header from './sections/Header';
// import Installation from './sections/Installation';
// import Components from './sections/Components';
// import Properties from './sections/Properties';
// import Responsive from './sections/Responsive';
// import Examples from './sections/Examples';

const Demo = () => (
  <div className="demo">
  <Flex element="section" gutter={ 0.25 }>
    <Box element="article" width={ 0.5 }>
      <code>
        Flex > Box(width=0.5)
      </code>
    </Box>
    <Box element="article" width={ 0.5 }>
      <code>
        Flex > Box(width=0.5)
      </code>
    </Box>
  </Flex>
  {/*    
    <Header />
    <Installation />
    <Components />
    <Properties />
    <Responsive />
    <Examples />
  */}
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('content'));