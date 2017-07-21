/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Flex from 'Flex';
import FlexItem from 'FlexItem';
import './main.scss';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import Header from './sections/Header';

const Demo = () => (
  <div className="demo">
    <Header />
    <section className="demo__section">
      <header className="demo__section-header">
        <h2>Installation</h2>
      </header>
      <code className="prism-code">
        npm install re-grid
      </code>
    </section>
    <section className="demo__section">
      <header className="demo__section-header">
        <h2>
          Example
        </h2>
      </header>
      <LiveProvider scope={{ Flex, FlexItem }} code={
`const App = () => (
  <Flex>
    <FlexItem>Item 1</FlexItem>
    <FlexItem>Item 2</FlexItem>
    <FlexItem>Item 3</FlexItem>
  </Flex>
);`}>
        <Flex cellWidth="1/2" gutter="0px">
          <FlexItem>
            <LiveEditor />
          </FlexItem>

          <FlexItem>
            <LivePreview />
          </FlexItem>

          <FlexItem width="1">
            <LiveError />
          </FlexItem>
        </Flex>
      </LiveProvider>
    </section>
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('content'));